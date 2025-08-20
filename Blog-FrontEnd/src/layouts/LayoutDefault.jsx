import Footer from "./Footer";
import Header from "./Header.";
import Menu from "./Menu";

function LayoutDefault({ children }) {
    return (
        <>
            <Header />
            <Menu />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}

export default LayoutDefault;