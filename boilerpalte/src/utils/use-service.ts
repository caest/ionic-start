import { useEffect, useState } from "react";
import { Service } from "./types";

export function useServiceState<T>(
  service: Service<T>
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [currentState, setState] = useState(service.getState());

  useEffect(() => {
    const subscription = service.state$.subscribe((state) => {
      setState(state);
    });

    return () => {
      subscription.unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateState = (action: React.SetStateAction<T>) => {
    service.setState(action);
  };

  return [currentState, updateState];
}
