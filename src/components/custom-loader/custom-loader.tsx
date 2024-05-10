import styles from "./custom-loader.module.scss"
import { Loader, LoaderProps } from "@mantine/core";

type CustomLoaderProps = {
    isLoading:boolean
} & LoaderProps
const CustomLoader = ({ isLoading,...loaderProps }: CustomLoaderProps) => {
    return isLoading ? (
        <div className={"w-full h-full flex justify-center items-center"}>
            <Loader {...loaderProps}/>
        </div>
    ) : null;
};

export default CustomLoader;