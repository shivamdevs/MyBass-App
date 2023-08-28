import AsideBar from './components/Aside';
import Header from './components/Header';
import HomePage from './pages/Home';

function App() {
    return (
        <div className="w-full min-h-[100dvh]">
            <Header />
            <div className="w-full">
                <div className="flex flex-nowrap w-full">
                    <AsideBar />
                    <main className="flex-1 relative max-w-[calc(100dvw_-_320px)]">
                        <HomePage />
                    </main>
                </div>
            </div>
        </div>
    );
}

export default App;
