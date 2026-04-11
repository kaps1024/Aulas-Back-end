let paises = { br: "Brasil", us: "EUA" };

Object.entries(paises).forEach(([sigla, nome]) => {
    console.log(`A sigla ${sigla} é do país ${nome}.`);
});