"use client"
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@heroui/react";
import Image from "next/image";
import {siteConfig} from "@/config/site.config";
import {useState} from "react";
import RegisterModal from "@/app/components/common/ui/modals/register.modal";
import LoginModal from "@/app/components/common/ui/modals/login.modal";

export const LogoIcon = () => {
    return (
        <Image src="/succulent.png" alt="Plant icon" height={26} width={26} priority/>
    )
}

export default function Header() {
    const [isRegisterOpen, setIsRegisterOpen] = useState(false)
    const [isLoginOpen, setIsLoginOpen] = useState(false)

    return (
        <Navbar>
            <NavbarBrand>
                <LogoIcon/>
                <p className="font-bold text-inherit">Plants</p>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                {
                    siteConfig.navItems.map(i => {
                        return (
                            <NavbarItem key={i.href}>
                                <Link color="foreground" href={i.href}>
                                    {
                                        i.label
                                    }
                                </Link>
                            </NavbarItem>
                        )
                    })
                }
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                <Button onPress={() => setIsLoginOpen(true)} as={Link} color="primary" href="#" variant="bordered">
                        Войти
                    </Button>
                </NavbarItem>
                <NavbarItem>
                    <Button onPress={() => setIsRegisterOpen(true)} as={Link} color="primary" href="#" variant="flat">
                        Зарегесрироваться
                    </Button>
                </NavbarItem>
            </NavbarContent>
            <RegisterModal isOpen={isRegisterOpen} onClose={() => setIsRegisterOpen(false)}/>
            <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)}/>
        </Navbar>
    );
}
