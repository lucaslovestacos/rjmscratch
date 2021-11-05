class ScratchClip {
    constructor() {
    }
    
    getInfo() {
        return {
            "id": "Add to Clipboard",
            "name": "Add to Clipboard",
            "blocks": [
                        {
                            "opcode": "addToClip",
                            "blockType": "reporter",
                            "text": "copy [text] to player's clipboard",
                            "arguments": {
                                "text": {
                                    "type": "string",
                                    "defaultValue": "Hello, Clipboard!"
                                },
                            }
                        }
                ],
        };
    }
    
    addToClip(text) {
        navigator.clipboard.writeText(text)
    }
    
}

Scratch.extensions.register(new ScratchClip())
