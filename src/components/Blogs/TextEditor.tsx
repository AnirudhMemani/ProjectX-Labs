import { FormEvent, useState } from "react";
import { CustomInput } from "../CustomInput";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { AnimatedLoader } from "../Loader/AnimatedLoader";
import { Toast } from "../Toast";

const TextEditor: React.FC<{ buttonTitle: string }> = ({
  buttonTitle
}): React.JSX.Element => {
  // <-- useState variables -->
  const [title, setTitle] = useState<string>("");
  const [summary, setSummary] = useState<string>("");
  const [averageReadTime, setAverageReadTime] = useState<string>("");
  const [thumbnail, setThumbnail] = useState<File | null>(null);
  const [content, setContent] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | undefined>(
    undefined
  );

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike", "blockquote", "code-block"],
      [{ script: "sub" }, { script: "super" }],
      [{ font: [] }],
      [{ align: [] }],
      [{ color: [] }, { background: [] }],
      [{ direction: "rtl" }],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" }
      ],
      ["link", "image", "video"],
      ["clean"]
    ]
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "code-block",
    "script",
    "font",
    "align",
    "color",
    "background",
    "direction",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "Video"
  ];

  const submitBlog = async (e: FormEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    setIsLoading(true);
    const blogData: FormData = new FormData();
    const jwtToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiYWRtaW5Eb2N1bWVudElkIjoicXFNV0YwRU1NOHM3QldVU051ZUoiLCJpYXQiOjE1MTYyMzkwMjJ9.53YhTNA5VZeJqjZJ45HdtLVwQ52DulSqZXjZAq65ZQc";
    blogData.set("title", title);
    blogData.set("summary", summary);
    if (thumbnail) {
      blogData.set("thumbnail", thumbnail);
    }
    blogData.set("content", content);
    blogData.set("averageReadTime", averageReadTime);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_URL}${
          import.meta.env.VITE_BLOGS_CREATE_ENDPOINT
        }`,
        blogData,
        {
          headers: {
            Authorization: "Bearer " + jwtToken
          }
        }
      );
      if (response) {
        setToastMessage("Your blog has been saved successfully!");
      }
    } catch (error) {
      setToastMessage(
        "There was an error trying to save blog. Try again later!"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <form
        className="flex w-full flex-col items-center justify-center px-4 py-6 text-white"
        onSubmit={submitBlog}
      >
        <CustomInput
          type="title"
          placeholder={"Title"}
          onChange={(ev) => setTitle(ev.target.value)}
          value={title}
          required
        />
        <CustomInput
          type="summary"
          placeholder={"Summary"}
          onChange={(ev) => setSummary(ev.target.value)}
          value={summary}
          required
        />
        <CustomInput
          type="number"
          placeholder="Average Read Time"
          onChange={(ev) => setAverageReadTime(ev.target.value)}
          value={averageReadTime}
          required
        />
        <CustomInput
          type="file"
          accept="image/jpg image/jpeg image/png image/webp"
          onChange={(ev) => setThumbnail(ev.target.files?.[0] || null)}
          name="thumbnail"
          required
        />
        <ReactQuill
          className="mt-6 w-full text-white"
          modules={modules}
          formats={formats}
          theme="snow"
          onChange={(value) => setContent(value)}
          value={content}
        />
        <input
          type="submit"
          value={buttonTitle}
          className="mt-4 w-full cursor-pointer rounded-md bg-slate-300 py-4 font-medium text-slate-700 transition-colors duration-300 ease-in-out hover:bg-slate-400 active:bg-slate-500"
        />
      </form>
      {isLoading && <AnimatedLoader />}
      <Toast toastMessage={toastMessage} setToastMessage={setToastMessage} />
    </>
  );
};

export default TextEditor;
