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
            fontFamily:'Inter',
            colors:{
                'c-teal':['#EFFCF6', '#C6F7E2', '#8EEDC7', '#65D6AD', '#3EBD93', '#27AB83', '#199473', '#147D64', '#0C6B58', '#014D40'],
                'c-red':['#FFEEEE', '#FACDCD', '#F29B9B', '#E66A6A', '#D64545', '#BA2525', '#A61B1B', '#911111', '#780A0A', '#610404'],
                'c-yellow':['#FFFAEB', '#FCEFC7', '#F8E3A3', '#F9DA8B', '#F7D070', '#E9B949', '#C99A2E', '#A27C1A', '#7C5E10', '#513C06'],
                'c-blue-gray':['#F0F4F8', '#D9E2EC', '#BCCCDC', '#9FB3C8', '#829AB1', '#627D98', '#486581', '#334E68', '#243B53', '#102A43'],
                'c-blue':['#DCEEFB', '#B6E0FE', '#84C5F4', '#62B0E8', '#4098D7', '#2680C2', '#186FAF', '#0F609B', '#0A558C', '#003E6B'],
            },
            primaryColor: "c-teal",

        }}>
            {children}
        </MantineProvider>
    )

}