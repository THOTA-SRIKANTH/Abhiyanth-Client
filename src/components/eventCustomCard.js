import React from "react";
import {
	Card,
	CardMedia,
	CardContent,
	Typography,
	Button,
	Grid2,
} from "@mui/material";
export default function CustomCard() {
	const isLive = true;
	const isUpcoming = true;
	return (
		<Card
			sx={{
				maxWidth: 345,
				margin: "auto",
				backgroundColor: "black",
				color: "white",
				paddingTop: "1rem",
				paddingInline: "1rem",
				border: "1px solid #505050 ",
				borderRadius: "20px",
				position: "relative",
			}}
		>
			{isLive && (
				<div
					style={{
						position: "absolute",
						top: "10px",
						right: "10px",
						background: "red",
						color: "white",
						fontSize: "12px",
						fontWeight: "bold",
						padding: "5px 10px",
						borderRadius: "12px",
						textTransform: "uppercase",
						boxShadow: " 0 2px 4px rgba(0, 0, 0, 0.2)",
					}}
				>
					LIVE
				</div>
			)}
			{/* Full-width image */}
			<CardMedia
				component="img"
				height="150"
				image="data:image/png;base64,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"
				alt="Top full-width image"
				sx={{
					border: "1px solid #00B093",
					borderRadius: "10px",
					marginBottom: "10px",
				}}
			/>

			{/* Two images side by side */}
			<Grid2 container spacing={1}  >
				<Grid2 item size={6}>
					<CardMedia
						component="img"
						height="100"
						width="100%"
						image="data:image/jpeg;base64,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"
						alt="Left image"
						sx={{
							border: "1px solid #00B093",
							borderRadius: "10px",
						}}
					/>
				</Grid2>
				<Grid2 item  size={6}>
					<CardMedia
						component="img"
						height="100"
						image="data:image/jpeg;base64,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"
						alt="Right image"
						sx={{
							border: "1px solid #00B093",
							borderRadius: "10px",
						}}
					/>
				</Grid2>
			</Grid2>

			{/* Heading and content */}
			<CardContent sx={{ paddingLeft: "0", marginLeft: "0" }}>
				<Typography
					variant="h6"
					component="div"
					gutterBottom
					sx={{
						fontFamily: "Audiowide",
						fontSize: "28px",
						lineHeight: "35.7px",
						color: " #00B093",
					}}
				>
					Card Heading
				</Typography>
				<Typography
					variant="body2"
					color="text.secondary"
					sx={{
						fontFamily: "Audiowide",
						fontSize: "17px",
						lineHeight: "30.6px",
						color: "white",
						width: "90%",
					}}
				>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
					Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
					<br />
					Ut enim ad minim veniam...
				</Typography>
				<Button
					size="small"
					sx={{
						marginTop: 2,
						fontFamily: "Audiowide",
						fontSize: "18px",
						lineHeight: "20.6px",
						color: " #00B093",
					}}
				>
					Read More
				</Button>
				{isUpcoming && (
					<>
						<Typography
							variant="h6"
							component="div"
							gutterBottom
							sx={{
								fontFamily: "Audiowide",
								fontSize: "25px",
								lineHeight: "35.7px",
								color: " #C91C75",
								marginTop: "1rem",
							}}
						>
							Location
						</Typography>
						<Typography
							variant="body2"
							color="text.secondary"
							sx={{
								fontFamily: "Audiowide",
								fontSize: "17px",
								lineHeight: "30.6px",
								color: "white",
								width: "90%",
							}}
						>
							Lorem ipsum dolor sit amet
						</Typography>
					</>
				)}
				{/* conditional rendering */}
			</CardContent>
		</Card>
	);
}
