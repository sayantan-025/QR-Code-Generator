import { useContext } from "react";
import QRCode from "react-qr-code";
import { DataContext } from "./InputForm";

const QrCode = () => {
	const { data } = useContext(DataContext);
	return (
		<div className="bg-gray-100 rounded-r-md flex flex-col justify-center items-center p-4">
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
									size={256}
									style={{ height: "auto", maxWidth: "100%", width: "100%" }}
									value={data.url}
									viewBox="0 0 256 256"
									fgColor={data.color}
								/>
							</div>
						</div>
					) : (
						<p className="text-gray-600">
							Please enter a URL to generate a QR code.
						</p>
					)}
				</div>
			</div>
			<button className="bg-purple-600 mt-2 px-4 py-1 mx-auto w-[180px] rounded-sm hover:bg-purple-700 text-white">
				Download
			</button>
		</div>
	);
};

export default QrCode;
