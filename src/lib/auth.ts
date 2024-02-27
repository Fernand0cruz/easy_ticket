import { PrismaAdapter } from "@auth/prisma-adapter";
import { AuthOptions } from "next-auth";
import { prismaClient } from "./prisma";
import GoogleProvider from "next-auth/providers/google";
import { Stripe } from "stripe";
import { Adapter } from "next-auth/adapters";
import { DefaultUser } from "next-auth";

declare module "next-auth" {
    interface Session {
        user?: {
            id: string;
            name: string;
            image: string;
            stripeCustomerId: string;
            isActive: boolean;
            subscriptionId: string | null;
        };
    }
    interface User extends DefaultUser {
        stripeCustomerId: string;
        isActive: boolean;
        subscriptionId: string | null;
    }
}

export const authOptions: AuthOptions = {
    adapter: PrismaAdapter(prismaClient) as Adapter,
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async session({session, user}) {
            session!.user!.id = user.id;
            session!.user!.stripeCustomerId = user.stripeCustomerId;
            session!.user!.isActive = user.isActive;
            session!.user!.subscriptionId = user.subscriptionId
            return session;
        }
    },
    events: {
        createUser: async ({ user }) => {
            const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
                apiVersion: "2023-10-16",
            })
            await stripe.customers
                .create({
                    email: user.email!,
                    name: user.name!,
                })
                .then(async (customer) => {
					return prismaClient.user.update({
						where: { id: user.id },
						data: {
							stripeCustomerId: customer.id,
						},
					});
				});
        }
    }
} as AuthOptions;