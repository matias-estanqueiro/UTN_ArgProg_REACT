import "./App.css";
import CardItemDetail from "./components/CardItemDetail/CardItemDetail";

function App() {
    return (
        <>
            <CardItemDetail
                title={"Star Wars T-Shirt"}
                description="Expresa tu amor por Star Wars con nuestra remera exclusiva que presenta una impresionante imagen de un sable láser. La fuerza te acompañará mientras llevas esta prenda icónica que captura la esencia de la galaxia lejana. ¡Únete al lado luminoso de la moda con estilo galáctico!"
                price="USD 25.00"
                sku="7798574635124"
                stock="10"
            />
        </>
    );
}

export default App;
