"use client";

import { Card } from "./card";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTrigger } from "./sheet"
import { Button } from "./button";
import { MenuIcon } from "lucide-react";
import { ButtonToggle } from "./button-toggle";
import { signIn, signOut, useSession } from "next-auth/react"
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import Link from "next/link";
import { CreditCard, UsersRound, LucideSmartphoneNfc, LogIn, LogOut } from "lucide-react";

const Header = () => {
    const { status, data } = useSession();
    const handleLogin = async () => {
        await signIn();
    }
    const handleLogout = async () => {
        await signOut();
    }
    return (
        <Card className="flex justify-between items-center p-5">
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant={"outline"} size={"icon"}><MenuIcon /></Button>
                </SheetTrigger>
                <SheetContent side={"left"} className="flex flex-col gap-2">
                    <SheetHeader className="font-semibold mb-5">
                        MENU
                    </SheetHeader>
                    {
                        status === "authenticated" && (
                            <Card className="flex flex-col">
                                <div className="flex items-center gap-2 p-4">
                                    <Avatar>
                                        <AvatarFallback>
                                            {data?.user?.name?.[0].toUpperCase()}
                                        </AvatarFallback>
                                        {
                                            data?.user?.image && (
                                                <AvatarImage src={data?.user?.image} />
                                            )
                                        }
                                    </Avatar>
                                    <div className="flex flex-col">
                                        <p className="fonte-medium">{data?.user?.name}</p>
                                        <p className=" text-sm op">Bem Vindo ao EASYTICKET!</p>
                                    </div>
                                </div>
                            </Card>
                        )
                    }
                    {
                        status !== "authenticated" && (
                            <SheetClose asChild>
                                <Link href={"#"}>
                                    <Button variant="outline" className="w-full justify-start gap-2"
                                        onClick={handleLogin}
                                    >
                                        <LogIn size={16} />
                                        Entrar
                                    </Button>
                                </Link>
                            </SheetClose>
                        )
                    }
                    {
                        status === "authenticated" && (
                            <SheetClose asChild>
                                <Link href={"#"}>
                                    <Button variant="outline" className="w-full justify-start gap-2"
                                        onClick={handleLogout}
                                    >
                                        <LogOut size={16} />
                                        Sair
                                    </Button>
                                </Link>
                            </SheetClose>
                        )
                    }
                    <SheetClose asChild>
                            <Link href={"#"}>
                                <Button variant="outline" className="w-full justify-start gap-2">
                                    <MenuIcon size={16} />
                                    Recursos
                                </Button>
                            </Link>
                        </SheetClose>
                        <SheetClose asChild>
                            <Link href={"#"}>
                                <Button variant="outline" className="w-full justify-start gap-2">
                                    <CreditCard size={16} />
                                    Planos é preços
                                </Button>
                            </Link>
                        </SheetClose>
                        <SheetClose asChild>
                            <Link href={"#"}>
                                <Button variant="outline" className="w-full justify-start gap-2">
                                    <UsersRound size={16} />
                                    Clientes
                                </Button>
                            </Link>
                        </SheetClose>
                        <SheetClose asChild>
                            <Link href={"#"}>
                                <Button variant="outline" className="w-full justify-start gap-2">
                                    <LucideSmartphoneNfc size={16} />
                                    Contato
                                </Button>
                            </Link>
                        </SheetClose>
                </SheetContent>
                <span>EASYTICKET</span>
                <ButtonToggle />
            </Sheet>
        </Card>
    );
}

export default Header;