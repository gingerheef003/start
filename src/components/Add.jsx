import React, { useState } from "react";

const Add = () => {
	function addBookmark(e) {
		e.preventDefault()
		const icon = `https://s2.googleusercontent.com/s2/favicons?domain_url=${url}`
		const bm = localStorage.getItem("bm");
		let arr = []
		if (bm) {
			arr = JSON.parse(bm)
		}
		arr.push({
			url,
			favicon: icon
		})

		localStorage.setItem("bm", JSON.stringify(arr))
	}
	const [url, setURL] = useState("")
	return (
		<form id="search" onSubmit={addBookmark}>
			<input
				id="query"
				type={"search"}
				name="query"
				placeholder="Add Bookmark"
				onChange={(e) => {
					setURL(e.target.value)
				}}
			/>
		</form>
	)
}

export default Add;
