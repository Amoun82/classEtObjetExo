let soldeCompte = 2500 ;
let retrait = 500 ;
let nouveauSolde ;

nouveauSolde = soldeCompte - retrait ;

if( retrait > soldeCompte)
{
    console.log("votre solde est insuffisant !!") ;
}
else
{
    console.log(`vous avez retiré ${retrait}`) ;
    console.log(`votre nouveau solde est de ${nouveauSolde}`)
}