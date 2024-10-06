import mongoose, { Schema } from "mongoose";
var laptopSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    namespaceId: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    capacityAvailable: {
        type: [
            String
        ],
        required: true
    },
    capacity: {
        type: String,
        required: true
    },
    priceRegular: {
        type: Number,
        required: true
    },
    colorsAvailable: {
        type: [
            String
        ],
        required: true
    },
    color: {
        type: String,
        required: true
    },
    images: {
        type: [
            String
        ],
        required: true
    },
    description: [
        {
            title: {
                type: String,
                required: true
            },
            text: {
                type: [
                    String
                ],
                required: true
            }
        }
    ],
    screen: {
        type: String,
        required: true
    },
    resolution: {
        type: String,
        required: true
    },
    processor: {
        type: String,
        required: true
    },
    ram: {
        type: String,
        required: true
    },
    cell: {
        type: [
            String
        ],
        required: true
    }
});
var WatchSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    namespaceId: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    capacityAvailable: {
        type: [
            String
        ],
        required: true
    },
    capacity: {
        type: String,
        required: true
    },
    priceRegular: {
        type: Number,
        required: true
    },
    colorsAvailable: {
        type: [
            String
        ],
        required: true
    },
    color: {
        type: String,
        required: true
    },
    images: {
        type: [
            String
        ],
        required: true
    },
    description: [
        {
            title: {
                type: String,
                required: true
            },
            text: {
                type: [
                    String
                ],
                required: true
            }
        }
    ]
});
var IpadSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    namespaceId: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    capacityAvailable: {
        type: [
            String
        ],
        required: true
    },
    capacity: {
        type: String,
        required: true
    },
    priceRegular: {
        type: Number,
        required: true
    },
    colorsAvailable: {
        type: [
            String
        ],
        required: true
    },
    color: {
        type: String,
        required: true
    },
    images: {
        type: [
            String
        ],
        required: true
    },
    description: [
        {
            title: {
                type: String,
                required: true
            },
            text: {
                type: [
                    String
                ],
                required: true
            }
        }
    ],
    camera: {
        type: String,
        required: true
    },
    zoom: {
        type: String,
        required: true
    }
}, {
    collection: "tablets"
});
var IphoneSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    namespaceId: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    capacityAvailable: {
        type: [
            String
        ],
        required: true
    },
    capacity: {
        type: String,
        required: true
    },
    priceRegular: {
        type: Number,
        required: true
    },
    colorsAvailable: {
        type: [
            String
        ],
        required: true
    },
    color: {
        type: String,
        required: true
    },
    images: {
        type: [
            String
        ],
        required: true
    },
    description: [
        {
            title: {
                type: String,
                required: true
            },
            text: {
                type: [
                    String
                ],
                required: true
            }
        }
    ],
    camera: {
        type: String,
        required: true
    },
    zoom: {
        type: String,
        required: true
    }
}, {
    collection: "phones"
});
export var Phone = mongoose.model("Iphone", IphoneSchema);
export var Tablet = mongoose.model("Ipad", IpadSchema);
export var Watch = mongoose.model("Watch", WatchSchema);
export var Laptop = mongoose.model("Laptop", laptopSchema);
