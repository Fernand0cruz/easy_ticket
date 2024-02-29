declare namespace NodeJS {
    interface ProcessEnv {
        DATABASE_URL: string;

        GOOGLE_CLIENT_ID: string;
        GOOGLE_CLIENT_SECRET: string;

        NEXT_PUBLIC_STRIPE_KEY: string;
        STRIPE_SECRET_KEY: string;

        NEXT_PUBLIC_STRIPE_MONTHLY_TEST: string;
        NEXT_PUBLIC_STRIPE_MONTHLY_MID: string;
        NEXT_PUBLIC_STRIPE_MONTHLY_FULL: string;

        NEXT_PUBLIC_STRIPE_SEMIANNUAL_TEST: string;
        NEXT_PUBLIC_STRIPE_SEMIANNUAL_MID: string;
        NEXT_PUBLIC_STRIPE_SEMIANNUAL_FULL: string;

        NEXT_PUBLIC_STRIPE_ANNUAL_TEST: string;
        NEXT_PUBLIC_STRIPE_ANNUAL_MID: string;
        NEXT_PUBLIC_STRIPE_ANNUAL_FULL: string;

        NEXAUTH_SECRET: string;
        NEXTAUTH_URL: string;

        URL_BASE: string;
    }
}