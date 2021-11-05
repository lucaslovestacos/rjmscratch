class ScratchClip {
    constructor() {
    }
    
    getInfo() {
        return {
            "id": "clip",
            "name": "clip",
            "blocks": [
                        {
                            "opcode": "addToClip",
                            "blockType": "command",
                            "text": "copy [text] to player's clipboard",
                            "arguments": {
                                "text": {
                                    "type": "string",
                                    "defaultValue": "Hello, Clipboard!"
                                },
                            }
                        }
                ],
        }
    };
    
    addToClip({text}) {
        prompt("Copy this Code", text);
    }
    
}

Scratch.extensions.register(new ScratchClip())
