interface SubscriptionPlan {
    id: string;
    typePlan: string;
    name: string;
    description: string;
    totalPrice: number;
    price: number;
    percentageDiscount: number;
    topic: string[];
    stripeProduct: string;
}

export const subscriptions: SubscriptionPlan[] = [
    {
        id: "monthly-test",
        typePlan: "monthly",
        name: "Gratis/Teste",
        description: "Perfeito para Autônomos e Freelancers.",
        totalPrice: 0,
        price: 0,
        percentageDiscount: 0,
        topic: ["5 Atendente", "5 Departamento", "Tickets Ilimitados", "Anexos de ate 150MB", "Base de Arquivos"],
        stripeProduct: process.env.NEXT_PUBLIC_STRIPE_MONTHLY_TEST,
    },
    {
        id: "monthly-mid",
        typePlan: "monthly",
        name: "Plano MID",
        description: "Perfeito para empresas Medias e em Crescimento.",
        totalPrice: 650,
        price: 650,
        percentageDiscount: 0,
        topic: ["100 Atendentes", "100 Departamento", "Tickets Ilimitados", "Anexos de ate 150MB", "Suporte", "Base de Arquivos", "Relatórios"],
        stripeProduct: process.env.NEXT_PUBLIC_STRIPE_MONTHLY_MID,
    },
    {
        id: "monthly-full",
        typePlan: "monthly",
        name: "Plano FULL",
        description: "Perfeito para empresas Grandes e Consolidadas.",
        totalPrice: 950,
        price: 950,
        percentageDiscount: 0,
        topic: ["Atendentes Ilimitados", "Departamentos Ilimitados", "Tickets Ilimitados", "Anexos de ate 150MB", "Suporte", "Base de Arquivos", "Relatórios"],
        stripeProduct: process.env.NEXT_PUBLIC_STRIPE_MONTHLY_FULL,
    },



    {
        id: "semi-annual-test",
        typePlan: "semi-annual",
        name: "Gratis/Teste",
        description: "Perfeito para Autônomos e Freelancers.",
        totalPrice: 0,
        price: 0,
        percentageDiscount: 0,
        topic: ["5 Atendente", "5 Departamento", "Tickets Ilimitados", "Anexos de ate 150MB", "Base de Arquivos"],
        stripeProduct: process.env.NEXT_PUBLIC_STRIPE_SEMIANNUAL_TEST,
    },
    {
        id: "semi-annual-mid",
        typePlan: "semi-annual",
        name: "Plano MID",
        description: "Perfeito para empresas Medias e em Crescimento.",
        totalPrice: 3510,
        price: 3900,
        percentageDiscount: 10,
        topic: ["100 Atendentes", "100 Departamento", "Tickets Ilimitados", "Anexos de ate 150MB", "Suporte", "Base de Arquivos", "Relatórios"],
        stripeProduct: process.env.NEXT_PUBLIC_STRIPE_SEMIANNUAL_MID,
    },
    {
        id: "semi-annual-full",
        typePlan: "semi-annual",
        name: "Plano FULL",
        description: "Perfeito para empresas Grandes e Consolidadas.",
        totalPrice: 5130,
        price: 5700,
        percentageDiscount: 10,
        topic: ["Atendentes Ilimitados", "Departamentos Ilimitados", "Tickets Ilimitados", "Anexos de ate 150MB", "Suporte", "Base de Arquivos", "Relatórios"],
        stripeProduct: process.env.NEXT_PUBLIC_STRIPE_SEMIANNUAL_FULL,
    },
    {
        id: "annual-test",
        typePlan: "annual",
        name: "Gratis/Teste",
        description: "Perfeito para Autônomos e Freelancers.",
        totalPrice: 0,
        price: 0,
        percentageDiscount: 0,
        topic: ["5 Atendente", "5 Departamento", "Tickets Ilimitados", "Anexos de ate 150MB", "Base de Arquivos"],
        stripeProduct: process.env.NEXT_PUBLIC_STRIPE_SEMIANNUAL_TEST,
    },
    {
        id: "annual-mid",
        typePlan: "annual",
        name: "Plano MID",
        description: "Perfeito para empresas Medias e em Crescimento.",
        totalPrice: 6630,
        price: 7800,
        percentageDiscount: 15,
        topic: ["100 Atendentes", "100 Departamento", "Tickets Ilimitados", "Anexos de ate 150MB", "Suporte", "Base de Arquivos", "Relatórios"],
        stripeProduct: process.env.NEXT_PUBLIC_STRIPE_ANNUAL_MID,
    },
    {
        id: "annual-full",
        typePlan: "annual",
        name: "Plano FULL",
        description: "Perfeito para empresas Grandes e Consolidadas.",
        totalPrice: 9690,
        price: 11400,
        percentageDiscount: 15,
        topic: ["Atendentes Ilimitados", "Departamentos Ilimitados", "Tickets Ilimitados", "Anexos de ate 150MB", "Suporte", "Base de Arquivos", "Relatórios"],
        stripeProduct: process.env.NEXT_PUBLIC_STRIPE_ANNUAL_FULL,
    }
];
