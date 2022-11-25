import {MantineProvider} from "@mantine/core";

interface ColorsProps {
    children : React.ReactNode;
}

export const Colors = ({children}:ColorsProps) => {
    return (
        <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
            primaryColor: "teal",

        }}>
            {children}
        </MantineProvider>
    )

}