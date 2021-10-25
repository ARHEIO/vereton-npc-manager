import { useEffect, RefObject } from 'react';

export const useDocumentEventListener = <E extends Event>(
  nodeRef: RefObject<Element>,
  event: keyof DocumentEventMap,
  eventCallback: (evt: E) => void
): void =>
  useEffect(() => {
    const doc = nodeRef?.current?.ownerDocument || document;
    doc.addEventListener(event, eventCallback as EventListener);
    return () => {
      doc.removeEventListener(event, eventCallback as EventListener);
    };
  }, [nodeRef, event, eventCallback]);

