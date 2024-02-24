"use client";

import { Card } from "./card";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTrigger} from "./sheet"
import { Button } from "./button";
import { MenuIcon } from "lucide-react";
import { ButtonToggle } from "./button-toggle";

const Header = () => {
    return ( 
        <Card className="flex justify-between items-center p-5">
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant={"outline"} size={"icon"}><MenuIcon/></Button>
                </SheetTrigger>
                <SheetContent side={"left"}>
                    <SheetHeader>
                        MENU
                    </SheetHeader>
                </SheetContent>
                <span>EASYTICKET</span>
                <ButtonToggle/>
            </Sheet>
        </Card>
     );
}
 
export default Header;