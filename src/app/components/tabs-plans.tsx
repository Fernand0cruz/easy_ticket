import { subscriptions } from "@/config/subscriptions";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
const CardPlans = () => {
    const monthly = subscriptions.filter((plan) => plan.typePlan === "monthly");
    const semiAnnual = subscriptions.filter((plan) => plan.typePlan === "semi-annual");
    const annual = subscriptions.filter((plan) => plan.typePlan === "annual");
    return (
        <Tabs defaultValue="monthly" className="flex flex-col">
            <TabsList>
                <TabsTrigger value="monthly">Mensal</TabsTrigger>
                <TabsTrigger value="semi-annual">Semestral</TabsTrigger>
                <TabsTrigger value="annual">Anual</TabsTrigger>
            </TabsList>
            <TabsContent value="monthly">
                {
                    monthly.map((plan) => (
                        <Card key={plan.id} className="mb-2">
                            <CardHeader>
                                <h1 className="uppercase font-semibold text-3xl">{plan.name}</h1>
                                <p className="opacity-75">{plan.description}</p>
                                <span className="text-2xl">R$ {plan.totalPrice.toFixed(2)}/mês</span>
                            </CardHeader>
                            <Separator className="mb-6" />
                            <CardContent>
                                {
                                    plan.topic.map((topic, index) => (
                                        <p key={index}>{topic}</p>
                                    ))
                                }
                            </CardContent>
                            <CardFooter>
                                <Button className="w-full">Assinar</Button>
                            </CardFooter>
                        </Card>
                    ))
                }
            </TabsContent>
            <TabsContent value="semi-annual">
                {
                    semiAnnual.map((plan) => (
                        <Card key={plan.id} className="mb-2">
                            <CardHeader>
                                <h1 className="uppercase font-semibold text-3xl">{plan.name}</h1>
                                <p className="opacity-75">{plan.description}</p>
                                <span className="text-2xl">R$ {plan.totalPrice.toFixed(2)}/semestre</span>
                            </CardHeader>
                            <Separator className="mb-6" />
                            <CardContent>
                                {
                                    plan.topic.map((topic, index) => (
                                        <p key={index}>{topic}</p>
                                    ))
                                }
                            </CardContent>
                            <CardFooter>
                                <Button className="w-full">Assinar</Button>
                            </CardFooter>
                        </Card>
                    ))
                }
            </TabsContent>
            <TabsContent value="annual">
                {
                    annual.map((plan) => (
                        <Card key={plan.id} className="mb-2">
                            <CardHeader>
                                <h1 className="uppercase font-semibold text-3xl">{plan.name}</h1>
                                <p className="opacity-75">{plan.description}</p>
                                <span className="text-2xl">R$ {plan.totalPrice.toFixed(2)}/ano</span>
                            </CardHeader>
                            <Separator className="mb-6" />
                            <CardContent>
                                {
                                    plan.topic.map((topic, index) => (
                                        <p key={index}>{topic}</p>
                                    ))
                                }
                            </CardContent>
                            <CardFooter>
                                <Button className="w-full">Assinar</Button>
                            </CardFooter>
                        </Card>
                    ))
                }
            </TabsContent>
        </Tabs>
    );
}

export default CardPlans;