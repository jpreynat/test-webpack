import { Block, Inline, Document } from './module';

function switcher(json) {
    const object = json.kind;

    switch (object) {
        case 'document':
            return handleDoc(json);
        case 'block':
            return handleBlock(json);
        case 'inline':
            return handleInline(json);
        default:
            throw new Error(`Unrecognized object ${json.kind}`);
    }
}

function switchCaller(json) {
    return handleDoc(json);
}

function handleDoc(json) {
    const { nodes = [] } = json;
    const value = switcher(json);

    return Document.fromJS({
        value
    });
}

function handleBlock(json) {
    const { nodes = [] } = json;
    const value = switcher(json);

    return Block.fromJS({
        value
    });
}

function handleInline(json) {
    const { nodes = [] } = json;
    const value = switcher(json);

    return Inline.fromJS({
        value
    });
}

export { switchCaller };
export default switcher;