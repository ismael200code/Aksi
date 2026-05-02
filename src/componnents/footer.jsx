

export default function Footer() {


    return (
        <footer className="flex flex-col gap-3 lg:p-23 md:p-23 p-10 bg-black text-white border-t-2 border-red-600">
            <div className="flex lg:flex-row md:flex-row flex-col justify-between mb-13 gap-2">
                <div>
                    <h3 className="font-bold text-2xl mb-3">Aksi</h3>
                    <p>La plateforme n°1 de location de véhicules avec chauffeur aux Comores</p>
                </div>
                <div>
                    <h3 className="font-bold text-2xl mb-3">Légal</h3>
                    <ul className="flex flex-col gap-2">
                        <li>Conditions d'utilisation</li>
                        <li>Politique de confidentialité</li>
                        <li>Mentions légales</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold text-2xl mb-3">Contact</h3>
                    <ul className="flex flex-col gap-2">
                        <li>Moroni, Union des Comores</li>
                        <li>+269 400 69 41</li>
                        <li>contact@aksi.km</li>
                    </ul>
                </div>
            </div>


            <div className="flex justify-between gap-3 lg:flex-row md:flex-row flex-col border-t border-gray-500">
                <span><p>© 2026 Aksi. Tous droits réservés.</p></span>
                <span><p>Conçu avec passion aux Comores 🇰🇲</p></span>
            </div>
        </footer>
    )
}