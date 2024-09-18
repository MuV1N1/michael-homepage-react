'use client'

export default function HomePage() {
    return (
        <>

            <section id="uebermich" className="bg-white">
                <div className="max-w-[75%] mx-auto flex flex-col sm:flex-row items-center">
                    <div id="text" className="w-full sm:w-2/3">
                        <h1>Moin, wie man im Norden sagt.</h1>
                        <p className="text-lg sm:text-xl mb-7 mt-7">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                        <p className="text-lg sm:text-xl mb-7">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                        <p className="text-lg sm:text-xl mb-7">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div id="logo" className="w-1/4 sm:w-1/3 flex justify-center sm:justify-center mt-4 sm:mt-0 ml-3">

                        {/*Need new Image later*/}
                        <img
                            src="https://media.gettyimages.com/id/2147648930/de/foto/sporty-beautiful-black-woman-in-red-sportswear.webp?s=612x612&w=gi&k=20&c=eXHjSZyyIGimRK53eZWkKveeCQGimZX_KD0KMM4zBko="
                            alt="test"
                            className="w-48 h-auto rounded-full object-cover aspect-square"
                        />                        </div>
                </div>
            </section>
            <section className="bg-red-900">
                <p className="text-cyan-200 text-center">TS</p>
            </section>
        </>
    );
}