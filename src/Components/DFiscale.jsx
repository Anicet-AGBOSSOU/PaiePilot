import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function DFisacal() {
  return (
    <div className="container mt-4">
      <h2 className="mb-3 text-center">Votre destination pour un bon suivi sur les règlementations fiscales et sociales Béninoises</h2>
      <p className="lead text-center">Découvrez les deux types d'impôts et charges sociales sur salaire</p>

      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th scope="col">No</th>
              <th scope="col">Nom</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">I</th>
              <td>Impôt sur les Traitements et Salaires (ITS)</td>
            </tr>
            <tr>
              <th scope="row">II</th>
              <td>Versement Patronal sur Salaire (VPS)</td>
            </tr>
            <tr>
              <th scope="row">III</th>
              <td>Cotisation Ouvrière</td>
            </tr>
            <tr>
              <th scope="row">IV</th>
              <td>Charge Patronale sur Salaire</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="card mt-4">
        <div className="card-header bg-primary text-white">
          <h3>I - IMPOT SUR LES TRAITEMENTS ET SALAIRES (ITS)</h3>
        </div>
        <div className="card-body">
          <h4 className="card-title">SECTION 1 - CHAMP D’APPLICATION</h4>
          <p><b>Article 119 :</b> Sont soumis à l’impôt sur les traitements et salaires :</p>
          <ol>
            <li>les revenus provenant des traitements, émoluments et salaires publics ou privés, ainsi que les rétributions accessoires de toute nature ;</li>
            <li>les indemnités de fin de carrière (IFC) versées aux salariés par leur employeur ou par un assureur auprès duquel l’employeur a cotisé ;</li>
            <li>les rémunérations versées aux dirigeants des sociétés soumises à l’impôt sur les sociétés, à l’exception de celles visées au paragraphe 4 de l’article 69 du présent code.</li>
          </ol>

          <p><b>Article 120 :</b> Sont affranchies de l’impôt :</p>
          <ol>
            <li>les indemnités de licenciement calculées sur la base des textes légaux, à l’exception des indemnités de congés payés et de préavis ;</li>
            <li>les allocations familiales, allocations d’assistance et majorations de salaires ou d’indemnités à caractère de prestation de sécurité sociale. Pour les salariés du secteur privé, la portion de ces allocations ou majorations qui est située au-dessus du montant payable par la caisse nationale de sécurité sociale aux fonctionnaires de même qualification, de même grade et de même situation matrimoniale, n’est pas affranchie de l’impôt ;</li>
            <li>les cotisations patronales versées par les employeurs dans le cadre d’un contrat collectif de prévoyance et de retraite complémentaire, dans la limite d’une fois et demie la part patronale de la cotisation retraite à la caisse nationale de sécurité sociale ;</li>
            <li>les rémunérations et gratifications de toutes natures versées dans le cadre d’une convention de stage régulièrement conclue pour une durée ne pouvant excéder trois (3) mois au profit des élèves, étudiants ou apprentis âgés de moins de trente (30) ans. Le stage concerné doit faire partie intégrante d’un programme scolaire ou universitaire et présenter un caractère obligatoire, c’est-à-dire être prévu par le règlement scolaire ou universitaire ou être nécessaire à la participation à un examen ou l’obtention d’un diplôme. La rémunération mensuelle ne peut en aucun cas dépasser trois (3) fois le salaire minimum interprofessionnel garanti.</li>
          </ol>

          <p><b>Article 121 :</b></p>
          <ol>
            <li>Les traitements, émoluments, salaires et rétributions accessoires sont imposables en République du Bénin :
              <ol type="a">
                <li>lorsque le bénéficiaire est domicilié en République du Bénin alors même que l’activité rémunérée s’exerce hors du territoire national ou que l’employeur est domicilié ou établi hors de la République du Bénin ;</li>
                <li>lorsque le bénéficiaire est domicilié hors du Bénin à la condition que l’activité rétribuée s’exerce en République du Bénin ou que l’employeur soit domicilié ou établi en République du Bénin.</li>
              </ol>
            </li>
            <li>Sont considérés comme ayant leur domicile fiscal en République du Bénin :
              <ol type="a">
                <li>les personnes qui y possèdent ou y jouissent d’un foyer d’habitation permanent ;</li>
                <li>les personnes qui, sans disposer en République du Bénin d’un foyer d’habitation permanent dans les conditions définies au point a du présent paragraphe, ont néanmoins en République du Bénin le centre de leurs intérêts vitaux ;</li>
                <li>dans le cas où les personnes n’ont pas de foyer d’habitation permanent en République du Bénin ou si le centre de leurs intérêts vitaux ne peut pas être déterminé, elles sont considérées comme ayant leur domicile en République du Bénin si elles y séjournent de façon habituelle pendant au moins cent-quatre-vingt-trois (183) jours de façon continue ou non sur une période de douze (12) mois.</li>
              </ol>
            </li>
          </ol>

          <h4 className="card-title mt-3">SECTION 2 - DETERMINATION DE LA BASE D’IMPOSITION</h4>
          <p><b>Article 122 :</b></p>
          <ol>
            <li>Le salaire mensuel imposable inclut les montants bruts des traitements, émoluments, salaires, pécules, gratifications, rétributions des heures supplémentaires, avantages professionnels en argent ou en nature et indemnités de toute sorte, y compris les indemnités de transport.</li>
            <li>Les indemnités de maladie versées aux salariés sont comprises dans la base d’imposition.</li>
          </ol>

          <p><b>Article 123 :</b> (Modifié par la loi de finances pour 2024)</p>
          <ol>
            <li>Les avantages en nature s’entendent du complément du salaire payé, des biens dont l’employeur est propriétaire ou locataire et mis à la disposition gratuite du salarié, ou des services normalement aux frais du salarié et pris en charge gratuitement ou pour une valeur réelle par l’employeur.</li>
            <li>Les avantages en nature sont retenus chaque mois pour leur valeur réelle. Il s’agit notamment :
              <ol type="a">
                <li>des frais de voyage et de transport des effets personnels du salarié étranger et/ou de sa famille supportés par l’employeur, à l’exception de ceux se rapportant à sa première arrivée en République du Bénin pour la prise de fonction et à son départ définitif pour cause de cessation de fonction ;</li>
                <li>des frais médicaux et pharmaceutiques supportés par l’employeur, à l’exception de ceux afférents au rapatriement sanitaire ainsi que des 80% des frais de consultation médicale et d’hospitalisation de l’employé, facturés par les formations sanitaires du Bénin au titre de la période de congé de maladie définie par la législation du travail ;</li>
                <li>des frais de scolarité des enfants du salarié supportés par l’employeur ;</li>
                <li>des dépenses incombant normalement au salarié et prises en charge par l’employeur ;</li>
                <li>des réductions tarifaires sur les produits cédés ou vendus par l’entreprise lorsqu’elles excèdent 30% du prix de cession public toutes taxes comprises.</li>
              </ol>
            </li>
            <li>Toutefois, les avantages en nature suivants sont évalués forfaitairement pour chaque mois :
              <div className="table-responsive">
                <table className="table table-sm table-bordered">
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Avantage</th>
                      <th scope="col">Dirigeants et cadres supérieurs</th>
                      <th scope="col">Employés</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Logement</td>
                      <td>15% du salaire de base</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Domesticité</td>
                      <td>15% du salaire de base à condition que le salaire du domestique ait donné lieu au versement des cotisations sociales à la caisse nationale de sécurité sociale et ait subi les retenues fiscales à la source</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Électricité</td>
                      <td>50 000 francs CFA</td>
                      <td>20 000 francs CFA</td>
                    </tr>
                    <tr>
                      <td>Eau</td>
                      <td>10 000 francs CFA</td>
                      <td>5 000 francs CFA</td>
                    </tr>
                    <tr>
                      <td>Téléphone</td>
                      <td>15 000 francs CFA</td>
                      <td>5 000 francs CFA</td>
                    </tr>
                    <tr>
                      <td>Nourriture</td>
                      <td>50 000 francs CFA</td>
                      <td>30 000 francs CFA</td>
                    </tr>
                    <tr>
                      <td>Véhicules à 4 roues</td>
                      <td>30 000 francs CFA</td>
                      <td>15 000 francs CFA</td>
                    </tr>
                    <tr>
                      <td>Véhicules à 2 roues</td>
                      <td>10 000 francs CFA</td>
                      <td>5 000 francs CFA</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </li>
            <li>Pour le personnel de maison, les avantages en nature sont évalués forfaitairement pour chaque mois en divisant par deux (2) les tarifs prévus au paragraphe 3 ci-dessus.</li>
          </ol>

          <p><b>Article 124 :</b> Ne sont pas compris dans la base d’imposition :</p>
          <ol>
            <li>les frais de formation du personnel engagés par l’entreprise, dans la mesure où les charges correspondantes sont déductibles dans les conditions fixées par l’article 23 du présent code ;</li>
            <li>la prime d’assurance maladie d’un contrat collectif versée par l’entreprise ;</li>
            <li>la prime d’assurance maladie d’un contrat individuel versée par l’entreprise, lorsqu’elle ne dépasse pas 80% de la prime inscrite au contrat. Le cas échéant, la part excédentaire de 20% est considérée comme un avantage en nature compris dans la base d’imposition ;</li>
            <li>les traitements, émoluments, salaires et rétributions accessoires payés aux sportifs professionnels et aux artistes dans la limite de quatre (4) fois le salaire minimum interprofessionnel garanti.</li>
          </ol>

          <h4 className="card-title mt-3">SECTION 3 - TAUX</h4>
          <p><b>Article 125 :</b></p>
          <ol>
            <li>L’impôt est calculé par application à la base d’imposition des taux progressifs suivants :
              <ul>
                <li>0% pour la tranche inférieure ou égale à 60 000 francs CFA ;</li>
                <li>10% pour la tranche comprise entre 60 001 et 150 000 francs CFA ;</li>
                <li>15% pour la tranche comprise entre 150 001 et 250 000 francs CFA ;</li>
                <li>19% pour la tranche comprise entre 250 001 et 500 000 francs CFA ;</li>
                <li>30% pour la tranche supérieure à 500 000 francs CFA.</li>
              </ul>
            </li>
            <li>L’impôt résultant de l’application du barème ci-dessus est majoré d’une redevance au profit de l’office de radiodiffusion et télévision du Bénin de :
              <ul>
                <li>mille (1 000) francs CFA sur le salaire du mois de mars ;</li>
                <li>trois mille (3 000) francs CFA sur le salaire du mois de juin.</li>
              </ul>
              Les personnes dont le montant du revenu imposable n’excède pas la première tranche du barème de l’impôt sont exonérées du prélèvement de trois mille (3 000) francs CFA.
            </li>
          </ol>

          <p><b>Article 126 :</b></p>
          <ol>
            <li>Les rémunérations exceptionnelles bénéficient d’une atténuation d’imposition.</li>
            <li>Sont entendus par rémunérations exceptionnelles :
              <ol type="a">
                <li>les indemnités de fin de carrière et les primes de départ volontaire ;</li>
                <li>les indemnités de préavis et de congés payés dans le cadre d’une rupture de contrat de travail ;</li>
                <li>les treizièmes mois et rémunérations assimilées.</li>
              </ol>
            </li>
            <li>Pour la détermination de l’impôt sur les traitements et salaires :
              <ol type="a">
                <li>il est calculé un impôt sur le salaire moyen des douze (12) derniers mois précédant le versement des rémunérations exceptionnelles, y compris les rémunérations visées au paragraphe 2 point c du présent article ;</li>
                <li>il est multiplié cet impôt moyen par le rapport entre le total des rémunérations perçues au cours du mois (rémunération mensuelle et rémunérations exceptionnelles) et le salaire moyen déterminé au point a du présent paragraphe. Les rémunérations exceptionnelles du paragraphe 2 point a du présent article bénéficient d’un abattement de 25%.</li>
              </ol>
            </li>
          </ol>

          <h4 className="card-title mt-3">SECTION 4 - DECLARATION ET PAIEMENT</h4>
          <p><b>Article 127 :</b></p>
          <ol>
            <li>Toute personne physique ou morale qui paie des sommes imposables en République du Bénin est tenue d’opérer pour le compte du trésor public, la retenue de l’impôt.</li>
            <li>Elle doit, pour chaque bénéficiaire d’un paiement imposable, mentionner sur son livre, fichier ou autre document destiné à l’enregistrement de la paie ou à défaut, sur un livre spécial, la date, la nature et le montant des retenues opérées, les références de la quittance délivrée par la recette des impôts compétente.</li>
            <li>Les employeurs qui sont tenus, en vertu des dispositions de la législation de travail, de délivrer lors de chaque paiement de salaire une pièce justificative aux bénéficiaires, doivent indiquer sur cette pièce les retenues opérées au titre de l’impôt sur les traitements et salaires.</li>
          </ol>

          <p><b>Article 128 :</b></p>
          <ol>
            <li>L’impôt est prélevé à la source au moment des paiements des traitements, émoluments, salaires et rétributions accessoires, lorsque l’employeur est domicilié ou établi en République du Bénin.</li>
            <li>Les contribuables domiciliés en République du Bénin, qui reçoivent de particuliers, d’administrations, de sociétés ou d’associations domiciliés ou établis hors du Bénin, des traitements, émoluments, salaires et rétributions quelconques, sont tenus de souscrire spontanément, chaque mois, la déclaration de leurs revenus salariaux. Ils doivent calculer et reverser les retenues correspondantes dans les mêmes conditions et délais que ceux imposés aux employeurs.</li>
            <li>Les retenues opérées sont libératoires.</li>
          </ol>

          <p><b>Article 129 :</b></p>
          <ol>
            <li>Les retenues afférentes aux salaires relatifs à un (1) mois déterminé doivent être reversées au plus tard le 10 du mois suivant.</li>
            <li>Le montant correspondant aux retenues faites à la source doit être présenté au guichet de la recette des impôts compétente, accompagné d’une déclaration fiscale mensuelle établie en double exemplaire sur le modèle des imprimés fournis par l’administration.</li>
          </ol>
        </div>
      </div>

      <div className="card mt-4">
        <div className="card-header bg-success text-white">
          <h3>II - Versement Patronal sur Salaire (VPS)</h3>
        </div>
        <div className="card-body">
        <p><b>Article 191 :</b> Les personnes physiques ou morales qui paient des traitements,
émoluments, salaires et rétributions accessoires, sont assujetties au paiement du versement
patronal sur salaires.</p>
        <p><b>Article 192 :</b> (Modifié par les lois de finances pour 2023 et 2024) Sont affranchis du
        versement patronal sur salaires :</p>
          <ol>
            <li> les représentations diplomatiques et organisations internationales ;</li>
            <li>les contribuables assujettis à la taxe professionnelle synthétique ;</li>
            <li>les entreprises nouvelles régulièrement créées au titre de leur premier exercice,
            pour l’emploi de salariés de nationalité béninoise ;</li>
            <li> les personnes visées à l’article 191 ci-dessus pendant deux ans sur les rémunérations
versées au titre du premier emploi du salarié de nationalité béninoise, à compter de la date
d’embauche et à condition que le salarié soit déclaré à la caisse nationale de sécurité
sociale ;</li>
            <li> les personnes physiques ou morales promotrices d’activités sportives ou artistiques
pour les rémunérations versées aux sportifs professionnels et aux artistes, dans la limite de
quatre fois le salaire minimum interprofessionnel garanti ;</li>
            <li> les personnes physiques ou morales pour les rémunérations versées aux stagiaires
            dans les conditions prévues à l’article 120 du présent Code ;</li>
            <li> es employeurs domestiques salariés ou non pour les rémunérations versées aux
employés domestiques, tels que définis par les lois et règlements régissant la sécurité sociale
en République du Bénin. Le bénéfice de l’exonération est subordonné à la déclaration et
au paiement des cotisations à la caisse nationale de sécurité sociale.</li>
      <p> Les dispositions du présent article ne s’appliquent pas aux associations et organismes
sans but lucratif ne bénéficiant pas d’une exonération expresse.</p>
      <p><b>Article 193 :</b> La base d’imposition du versement patronal sur salaires est identique à
      celle de l’impôt sur les traitements et salaires.</p>
      <p><b>Article 194 :</b> Le taux du versement patronal sur salaires est fixé à 4%.</p>
      <p>Il est réduit à 2% en ce qui concerne les établissements d’enseignement privé.</p>
      <p><b>Article 195 :</b> Le versement patronal sur salaires est liquidé sur la même déclaration que
      l’impôt sur les traitements et salaires.</p>
      <p>Il est payé à la recette des impôts compétente dans les conditions et délais précisés
      aux articles 127 à 129 du présent code.</p>


          </ol>        </div>
      </div>



    <br />  <br /><br /><div className="p-4 bg-white shadow rounded">
          <h5>Bienvenue dans l'espace de la sécurité sociale 👋</h5>
          <p >
          L’employeur est toute personne physique ou morale privée ou publique qui utilise un (01) ou plusieurs travailleurs contre rémunération. Dès l’ouverture de son entreprise ou à l’embauche du premier salarié, l’employeur doit matérialiser son existence par son immatriculation à la CNSS.
A cet effet, il remplit trois (03) sortes d’imprimés que la Caisse met gratuitement à sa disposition:
d’une demande d’immatriculation,
d’un avis d’embauchage par le travailleur,
d’un état de recensement de son personnel,
de l’effectif du personnel, la date d’embauchage de chaque salarié et les salaires individuels des salariés doivent être mentionnés.
Ces imprimés dûment remplis doivent être remis à la Caisse sans délai. Celle-ci vous notifie un numéro d’immatriculation que vous aurez à rappeler dans toutes vos correspondances.
<br /><br />Lorsque vous engagez un travailleur déjà affilié à la caisse, remplissez un avis d’embauchage pour sa prise en charge. N’oubliez pas de mentionner son numéro d’affiliation. Si le travailleur que vous embauchez n’est pas encore affilié, vous adressez à la caisse un avis d’embauchage obligatoirement accompagné des pièces ci-après :
une (01) photocopie légalisée de la carte d’identité
une (01) photo d’identité
une (01) copie conforme ou photocopie légalisée de l’extrait d’acte de naissance ou du jugement supplétif d’acte de naissance
Dans tous les cas, le travailleur doit être déclaré à la caisse dès le premier jour de son recrutement.
<br /><br />En cas de licenciement ou de résiliation du contrat d’un travailleur, l’employeur le signale à la CNSS par un avis de débauchage.
<br /><br /> L’employeur est débiteur vis-à-vis de la Caisse de la cotisation totale y compris la part salariale qui est précomptée sur la rémunération du travailleur lors de chaque paie.
<br /><br />L’employeur doit produire lors du versement des cotisations, les pièces justificatives suivantes :
une déclaration de salaires et de cotisations
une déclaration nominative du personnel à fournir trimestriellement par les employeurs utilisant au moins vingt (20) salariés
<br /><br />L’employeur qui ne verse pas les cotisations dans le délai prescrit est passible d’une majoration de 1.50 % par mois ou fraction de mois de retard.
Cette majoration de retard est due au même titre que la cotisation et payée dans les mêmes conditions.
<br /><br />L’employeur qui a contrevenu aux prescriptions de la législation de la sécurité sociale peut être poursuivi par la Caisse. Tout employeur débiteur des cotisations peut se voir opposer des saisies-arrêts pratiquées à la requête de la Caisse.
          </p>
        </div>


      <div className="card mt-4">
        <div className="card-header bg-info text-white">
          <h3>III - Cotisation Ouvrière</h3>
        </div>
        <div className="card-body">
        <p><b>Les contributions sociales payées par l'employé: </b> <br /> <br />  L'employé cotise 3,6 % de son salaire mensuel brut pour la sécurité sociale.</p>
        </div>
      </div>

      <div className="card mt-4">
        <div className="card-header bg-warning text-dark">
          <h3>IV - Charge Patronale sur Salaire</h3>
        </div>
        <div className="card-body">
        <p><b> Les contributions sociales payées par l'employeur: </b> <br /> <br />L'employeur contribue à hauteur de 15,4 % (6,4 % pour les pensions et 9 % pour les prestations familiales) du salaire mensuel brut, plus 1 à 4 % d'assurance contre les accidents du travail et maladies professionnelles, selon le degré de risque de l'emploi.</p> <br /> 
        <p><b>Qu’est-ce qu’un accident du travail ?</b></p>
          <ol>
            <li>C’est un accident survenu par le fait ou à l’occasion du travail, quelle qu’en soit la cause, à tout travailleur relevant du régime général de sécurité sociale.</li>
            <li>C’est également un accident survenu au travailleur pendant un voyage dont les frais sont à la charge de l’employeur.</li>
            <li>C’est enfin un accident survenu au travailleur pendant le trajet de sa résidence au lieu de travail et vice-versa ou pendant le trajet entre le lieu du travail et le lieu où il prend habituellement ses repas et vice-versa dans la mesure où le parcours n’a pas été interrompu ou détourné pour des motifs d’ordre personnel ou indépendant du travail</li> <br />
          </ol>
          <p><b>Quelles sont les prestations familiales ?</b></p>
          <ol>
          <li>les allocations prénatales</li>
          <li>Les allocations familiales</li>
          <li>Les prestations en nature relatives à l’action sanitaire et sociale</li>
          <li>Les prestations en cas de congé de maternité</li>

          </ol><p><b>Les conditions à remplir pour bénéficier de ces prestations</b></p>
          <ol>
          <li>Etre travailleur salarié(e) pendant au moins six (06) mois sans interruption chez un ou plusieurs employeurs</li>
          <li>Avoir un ou plusieurs enfants à charge, soit son épouse en état de grossesse, soit être femme salariée en état de grossesse</li>
          <li>Avoir constitué un dossier à la Caisse</li>
          </ol>
        
        </div>
      </div>
    </div>
  );
}

export default DFisacal;