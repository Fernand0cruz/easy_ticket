import CardPlans from "./tabs-plans";

const SectionPlans = () => {
    return (
        <section className="flex flex-col gap-7">
            <div>
                <h2 className="text-4xl font-semibold text-center">Preços e Planos</h2>
                <p className="text-center opacity-75">Escolha o plano ideal para o seu negócio.</p>
            </div>
            <CardPlans />
        </section>
    );
}

export default SectionPlans;