export default function ImageUploader() {
  return (
    <>
      <label htmlFor="image" className="imageUploader">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M5 21q-.825 0-1.413-.588T3 19V5q0-.825.588-1.413T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.588 1.413T19 21H5Zm0-2h14V5H5v14Zm0 0V5v14Zm2-2h10q.3 0 .45-.275t-.05-.525l-2.75-3.675q-.15-.2-.4-.2t-.4.2L11.25 16L9.4 13.525q-.15-.2-.4-.2t-.4.2l-2 2.675q-.2.25-.05.525T7 17Zm1.5-7q.625 0 1.063-.438T10 8.5q0-.625-.438-1.063T8.5 7q-.625 0-1.063.438T7 8.5q0 .625.438 1.063T8.5 10Z"
          />
        </svg>
        Upload image
      </label>
      <input
        className="visually-hidden"
        id="image"
        type="file"
        accept="image/*"
      />
    </>
  );
}
