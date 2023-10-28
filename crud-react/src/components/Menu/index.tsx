import Link from "next/link";
import { Alien, Atom, User } from "phosphor-react";
import { ContentContainer, MenuContainer, NavLink, NavLinkContainer } from "./styles";

export function Menu() {
    return (
        <MenuContainer>
            <ContentContainer>
            <Atom size={62} />

            <NavLinkContainer>
                <NavLink href="/users">
                    <User size={32} />
                </NavLink>
                <NavLink href="/users">
                    <Alien size={32} />
                </NavLink>
            </NavLinkContainer>
            </ContentContainer>
        </MenuContainer>
    )
}