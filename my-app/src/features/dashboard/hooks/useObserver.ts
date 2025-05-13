import { useInView } from "react-intersection-observer";

export const useObserver = () => {

const [ref, inView, entry]: [(node?: Element | null) => void, boolean,
  IntersectionObserverEntry | undefined
] = useInView({ threshold: 0 });

};