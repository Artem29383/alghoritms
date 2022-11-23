type HTMLElementProperties =
    | 'margin'
    | 'marginTop'
    | 'marginBottom'
    | 'marginLeft'
    | 'marginRight'
    | 'padding'
    | 'paddingTop'
    | 'paddingRight'
    | 'paddingLeft'
    | 'paddingBottom'
    | 'height'
    | 'width'
    | 'lineHeight';

export const getNodePropNumber = <T extends HTMLElement>(element: T, prop: HTMLElementProperties): number => {
    if (!element) return 0;
    if (['height', 'width'].includes(prop)) {
        return element.getBoundingClientRect()[prop] || 0;
    }
    if (
        [
            'margin',
            'marginTop',
            'marginBottom',
            'marginLeft',
            'marginRight',
            'padding',
            'paddingTop',
            'paddingRight',
            'paddingLeft',
            'paddingBottom',
            'lineHeight',
        ].includes(prop)
    ) {
        const node = window.getComputedStyle(element)[prop];
        if (!/px/.test(node)) return 0;
        return +node.split('px')[0];
    }

    return 0;
};

export const getNodesPropsSum = <T extends HTMLElement>(
    props: {element: T | null; prop: HTMLElementProperties}[],
): number =>
    props.reduce((total, {element, prop}) => {
        if (!element) return total;
        total += getNodePropNumber(element, prop);
        return total;
    }, 0);
