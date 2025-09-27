import {Schema, model, models} from 'mongoose';

const CategorySchemma = new Schema({
    title: {type:"string", required: true},
    user: {type: Schema.Types.ObjectId, ref: "User"}
});

const Category = models.Category || model('Category',CategorySchemma);

export default Category;