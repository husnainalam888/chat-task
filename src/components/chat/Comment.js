const CustomComment = ({ author, content }) => (
  <div className="border p-3 rounded-md bg-gray-100">
    <strong>{author}</strong>
    <p>{content}</p>
  </div>
);
