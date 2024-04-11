import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Gallery from "./components/Gallery";
import SearchForm from "./components/SearchForm";
import ThemeToggle from "./components/ThemeToggle";
import { GalleryProvider } from "./context/galleryContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const App = () => {
  return (
    <GalleryProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeToggle />
        <SearchForm />
        <Gallery />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </GalleryProvider>
  );
};
export default App;
