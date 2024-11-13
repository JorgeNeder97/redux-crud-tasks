import { Link } from "react-router-dom";
import { DarkModeButton } from "./DarkModeButton";


export const Header = () => {
    return (
        <h1 className="main-title">
            <Link to="/">TASK APP</Link> <DarkModeButton />
        </h1>
    );
};
