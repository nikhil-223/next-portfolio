import Image from 'next/image';
import React from 'react'

const Loading = () => {
  return (
		<div className="h-screen flex justify-center items-center">
			<div className="relative w-24 h-24">
				<Image
					alt="...loading"
					src="https://tenor.com/bTyBE.gif"
					unoptimized={true}
					fill></Image>
			</div>
		</div>
	);
}

export default Loading