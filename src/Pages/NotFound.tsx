import { Link } from "react-router-dom";
export default function NotFound() {
    return (
        <div className={"text-center"}>
            <h2 className={"text-3xl"}>Page not found!</h2>
            <p>Go to the <Link className={"text-blue-600 hover:underline cursor-pointer"} to={"/"}>Homepage</Link></p>
        </div>
    )
}