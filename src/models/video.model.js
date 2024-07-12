import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoschema = new Schema(
  {
    videoFile: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: ture,
    },
    title: {
      type: String,
      required: ture,
    },
    description: {
      type: String,
      required: ture,
    },
    duration: {
      type: Number,
      required: ture,
    },
    view: {
      type: Number,
      default: 0,
    },
    ispublished: {
      type: Boolean,
      default: true,
    },
    owner: {
      type: schema.Types.objectId,
      ref: "U ser",
    },
  },
  { timestamps: true }
);

videoschema.plugin(mongooseAggregatePaginate);

export const Video = mongoose.model("Video", videoschema);
