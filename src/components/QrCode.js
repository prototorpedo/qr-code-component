
export default function QrCode() {

  return (
    <div className="w-full mx-auto bg-white rounded-xl shadow-xl" style={{minHeight: '300px', maxWidth: '275px'}}>
      <div className="p-4">
        <img src="image-qr-code.png" className="w-full h-auto rounded-lg" />
        <div className="text-center px-2">
          <h3 className="my-4 font-bold text-lg">
            Improve your front-end skills by building projects
          </h3>
          <p className="text-sm text-gray-500">
            Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
          </p>
        </div>
      </div>
    </div>
  );
}
