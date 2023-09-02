import React, { useState } from "react";
import '../css/Search.css'

const Search = () => {
	function searchQuery(e) {
		e.preventDefault()
		const url = 'https://www.youtube.com/results?search_query=' + q;
		window.open(url, '_blank')
	}
	const [q, setQ] = useState("")
	return (
		<form id="search" onSubmit={searchQuery}>
			<input
				id="query"
				type={"search"}
				name="query"
				placeholder="Search"
				onChange={(e) => {
					setQ(e.target.value)
				}}
			/>
		</form>
	)
}

export default Search;
