import { useContext } from "react";
import QRCode from "react-qr-code";
import { DataContext } from "./InputForm";
import download from "downloadjs";

import * as htmlToImage from "html-to-image";
// import { toPng } from "html-to-image";

const QrCode = () => {
	const { data } = useContext(DataContext);

	const downloadImage = () => {
		htmlToImage
			.toPng(document.getElementById("qrCode"))
			.then(function (dataUrl) {
				download(dataUrl, `${new Date().toISOString()}.jpg`);
			});
	};
	return (
		<div className="bg-gray-100  rounded-md md:rounded-none md:rounded-r-md flex flex-col justify-center items-center p-4 h-full bg-transparent backdrop-blur-xl border-2 border-[#ffffff20]">
			<div>
				<div>
					{data.url ? (
						<div>
							<div
								style={{
									height: "180px",
									margin: "0 auto",
									maxWidth: 180,
									width: "180px",
								}}
							>
								<QRCode
									id="qrCode"
									size={256}
									style={{ height: "auto", maxWidth: "100%", width: "100%" }}
									value={data.url}
									viewBox="0 0 256 256"
									fgColor={data.color}
									bgColor="transparent"
								/>
							</div>
							<button
								onClick={downloadImage}
								className="bg-emerald-600 mt-2 px-4 py-1 mx-auto w-[180px] rounded-sm hover:bg-emerald-700 text-white"
							>
								Download
							</button>
						</div>
					) : (
						<p className="text-gray-600 text-center">
							Please enter a URL to generate a QR code.
						</p>
					)}
				</div>
			</div>
		</div>
	);
};

export default QrCode;
