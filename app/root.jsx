import { LiveReload } from "@remix-run/react";
import { Panel } from "remix";

export default App();
{
    return <Document />;
}
function Document({ children, title }) {
    <html lang="es">
        <head>
            <title>{title ? title : "Remix Run Blog"} </title>
        </head>
        <body>{process.env.NODE_ENV === "development" ? <LiveReload /> : "null"}</body>
    </html>;
}
