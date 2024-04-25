import { RefObject } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import {  debounceTime, Subject } from 'rxjs';

type Size = { width: number; height: number };

export const useSize: (target: RefObject<HTMLElement>) => Size = (target) => {
  const [state, setState] = useState<Size>({
    width: 0,
    height: 0,
  });
  useEffect(() => {
    if (!target.current) {
      return;
    }

    const subject = new Subject<Size>();

    const subscription = subject.pipe(debounceTime(300)).subscribe({
      next(value) {
        setState(value);
      },
    });

    const resizeObserver = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        const { clientWidth, clientHeight } = entry.target;
        subject.next({
          width: clientWidth,
          height: clientHeight,
        });
      });
    });

    resizeObserver.observe(target.current);
    return () => {
      resizeObserver.disconnect();
      subscription.unsubscribe();
    };
  }, [target.current]);

  return state;
};
