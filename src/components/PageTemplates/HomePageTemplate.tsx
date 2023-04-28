
import BasePageTemplate from "./BasePageTemplate";
import { PropsWithChildren } from "react";

export default function HomePageTemplate({children}: PropsWithChildren<{}>) {
    return (
        <BasePageTemplate>{children}</BasePageTemplate>
    )
}
