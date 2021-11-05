class ScratchClip {
    constructor() {
    }
    
    getInfo() {
        return {
            "id": "Clip",
            "name": "Clip",
            "blocks": [
                        {
                            "opcode": "clipText",
                            "blockType": "reporter",
                            "text": "add [text] to clipboard",
                            "arguments": {
                                "text": {
                                    "type": "string",
                                    "defaultValue": "Hello, Clipboard!"
                                },
                            }
                        },
                ],
        };
    }
    
    fetchURL({text}) {
       navigator.clipboard.writeText(text);
    }
    
}

Scratch.extensions.register(new ScratchClip())
