// Generated by CoffeeScript 1.10.0
(function() {
  var CardSet, ICONE_ATTENDU, ID, THEMES;

  THEMES = {
    "Nombres & Calculs": {
      "classe": "NC",
      "citation": "Chinoi la la pa bien rende a moin la monai",
      "attendus": {
        "Utiliser les nombres pour comparer, calculer et résoudre des problèmes": {
          "domaine": "D1",
          "notions": {
            "Enchaînements d'opérations": {
              "Calculer avec des nombres décimaux sans parenthèses": 1,
              "Calculer avec des nombres décimaux avec parenthèses": 1
            },
            "Nombres relatifs": {
              "Comparer des nombres relatifs": 1,
              "Additionner des nombres relatifs": 1,
              "Donner l'opposé d'un nombre relatif": 1,
              "Soustraire des nombres relatifs": 1,
              "Nombres relatifs et demi-droite graduée": 1,
              "Multiplier des nombres relatifs": 2,
              "Diviser des nombres relatifs": 2,
              "Nombres relatifs et les 4 opérations": 2
            },
            "Fractions": {
              "Donner diverses désignations de fractions": 1,
              "Déterminer si des fractions sont égales": 1,
              "Simplifier une fraction": 1,
              "Additionner et soustraire des fractions": 2,
              "Multiplier des fractions": 2,
              "Diviser des fractions": 2
            },
            "Racines carrées": {
              "Carrés parfaits et notion de racine carrée": 2,
              "Encadrer une racine carrée par deux nombres entiers": 2
            },
            "Puissances": {
              "Puissances d'un nombre": 2,
              "Puissances de 10": 2,
              "Multiplier par une puissance de 10": 2,
              "Opérations avec les puissances": 2,
              "Écriture scientifique": 2
            }
          }
        },
        "Utiliser le calcul littéral": {
          "domaine": "D1",
          "notions": {
            "Calcul littéral": {
              "Simplifier une expression littérale": 1,
              "Réduire une expression littérale": 1,
              "Utiliser une expression littérale": 1,
              "Tester une égalité": 1,
              "Développer avec la simple distributivité": 2,
              "Développer avec la double distributivité": 3,
              "Factoriser une expression": 2
            },
            "Équations et inéquations": {
              "Modéliser un problème par une équation": 2,
              "Résoudre des problèmes du 1er degré de façon exacte ou approchée": 2,
              "Résoudre une équation": 2,
              "Résoudre une inéquation": 2
            }
          }
        },
        "Comprendre et utiliser les notions de divisibilité et de nombres premiers": {
          "domaine": "D1",
          "notions": {
            "Nombres entiers et divisibilité": {
              "Rendre une fraction irréductible": 3,
              "Déterminer si un entier est divisible ou non par un autre entier": 3,
              "Utiliser les critères de divisibilité par 2, 3, 4, 5, 9 et 10": 1,
              "Division euclidienne": 1
            }
          }
        }
      }
    },
    "Org. & gest. de données, fonctions": {
      "classe": "OGD",
      "citation": "A koz un pak 6 y revien plu cher ?",
      "attendus": {
        "Interpréter, représenter et traiter des données": {
          "domaine": "D3",
          "notions": {
            "Interpréter, représenter et traiter des données": {
              "Lire un outil statistique": 1,
              "Construire un outil statistique": 1,
              "Utiliser le tableur": 1,
              "Calculer des effectifs et des fréquences": 1,
              "Calculer et interpréter la moyenne": 3,
              "Calculer et interpréter unela médiane d'une série statistique": 3,
              "Calculer et interpréter l'étendue d'une série statistique": 3
            }
          }
        },
        "Comprendre et utiliser des notions élémentaires de probabilités": {
          "domaine": "D1",
          "notions": {
            "Probabilités": {
              "Vocabulaire : expérience aléatoire, issues, évènements, univers, événement certain, impossible": 1,
              "Vocabulaire : événements contraires, incompatibles, équiprobabilité": 2,
              "Calculer des probabilités dans des cas simples (avec la fréquence)": 1,
              "Calculer la probabilité d'un événement (expérience aléatoire à deux épreuves)": 3,
              "Réaliser un arbre pondéré": 3
            }
          }
        },
        "Résoudre des problèmes de proportionnalité": {
          "domaine": "D2",
          "notions": {
            "Proportionnalité": {
              "Utiliser et calculer l'échelle d'une carte, d'un plan…": 1,
              "Reconnaître une situation de proportionnalité ou de non proportionnalité": 1,
              "Calculer une quatrième proportionnelle (coefficient, linéarité, retour à l’unité, règle de trois)": 1
            },
            "Pourcentage": {
              "Appliquer et calculer un pourcentage": 1
            }
          }
        },
        "Comprendre et utiliser la notion de fonction": {
          "domaine": "D4",
          "notions": {
            "Fonctions": {
              "Notion de fonction : différentes représentations et notations": 3,
              "Déterminer l'image ou l'antécédent d'un nombre par une fonction à partir d'un graphique ou d’un tableau": 3,
              "Fonctions linéaires": 3,
              "Fonctions affines": 3,
              "Déterminer par le calcul l'image d'un nombre par une fonction affine ou linéaire": 3,
              "Déterminer par le calcul l'antécédent d'un nombre par une fonction affine ou linéaire (équation)": 3
            }
          }
        }
      }
    },
    "Espace & géométrie": {
      "classe": "EG",
      "citation": "Dabor un pié apré un karo",
      "attendus": {
        "Représenter l'espace": {
          "domaine": "D5",
          "notions": {
            "Se repérer dans le plan": {
              "Se repérer sur une droite graduée": 1,
              "Se repérer dans un repère orthogonal": 1
            },
            "Géométrie dans l'espace": {
              "Utiliser, produire et mettre en relation des représentations de solides et des situations spatiales": 1,
              "Se repérer sur une sphère": 3,
              "Se repérer dans un pavé droit": 3
            }
          }
        },
        "Utiliser les notions de géométrie plane pour démontrer": {
          "domaine": "D1",
          "notions": {
            "Triangles": {
              "Construire des triangles": 1,
              "Tracer la hauteur d'un triangle": 1,
              "Utiliser l'inégalité triangulaire": 1,
              "Utiliser la règle des 180°": 1,
              "Déterminer les triangles semblables": 3
            },
            "Cercles et disques": {
              "Connaître le vocabulaire du cercle et du disque": 1,
              "Tracer un cercle (ou un disque) de rayon donné": 1
            },
            "Parallélogrammes": {
              "Construire et utiliser les propriétés du parallélogramme": 1,
              "Construire et utiliser les propriétés des parallélogrammes particuliers": 1
            },
            "Médiatrices": {
              "Tracer la médiatrice d'un segment avec le compas et la règle non graduée": 1,
              "Utiliser les propriétés de la médiatrice": 1
            },
            "Trigonométrie": {
              "Calculer une longueur avec cosinus, sinus ou tangente": 3,
              "Calculer un angle avec cosinus, sinus ou tangente": 3
            },
            "Théorème de Pythagore et sa réciproque": {
              "Calculer une longueur avec le théorème de Pythagore": 2,
              "Vérifier si un triangle est rectangle ou non avec la réciproque de Pythagore": 2
            },
            "Théorème de Thalès et sa réciproque": {
              "Calculer une longueur avec le théorème de Thalès": 3,
              "Vérifier si des droites sont parallèles ou non avec la réciproque de Thalès": 3
            },
            "Angles": {
              "Utiliser les angles alternes-internes": 1
            },
            "Transformations": {
              "Utiliser une rotation sur une figure": 3,
              "Coder une figure": 1,
              "Utiliser une homothétie sur une figure": 3,
              "Utiliser une translation sur une figure": 2,
              "Construire par symétrie axiale ou centrale": 1,
              "Utiliser les propriétés de la symétrie": 1
            }
          }
        }
      }
    },
    "Grandeurs & mesures": {
      "classe": "GM",
      "citation": "Meziré y kass pa le bra",
      "attendus": {
        "Calculer avec des grandeurs mesurables ; Exprimer les résultats dans les unités adaptées": {
          "domaine": "D1",
          "notions": {
            "Périmètre": {
              "Convertir des unités de longueurs": 1,
              "Calculer le périmètre d'une figure en utilisant une formule": 1,
              "Calculer le périmètre d'une figure composée de figures simples": 1
            },
            "Aires": {
              "Convertir des unités d'aires": 1,
              "Calculer l'aire d'une figure en utilisant une formule": 1,
              "Calculer l'aire d'une figure composée de figures simples": 1
            },
            "Volumes": {
              "Convertir des unités de volume": 1,
              "Convertir des unités de contenance": 1,
              "Relier des unités de volume et de contenance": 1,
              "Calculer le volume d'un solide en utilisant une formule": 1
            },
            "Grandeurs composées": {
              "Grandeurs produits": 2,
              "Grandeurs quotients": 2
            },
            "Durées": {
              "Convertir des unités de durée": 1,
              "Calculer une durée": 1
            },
            "Échelle": {
              "Utiliser et calculer l'échelle": 1
            },
            "Angles": {
              "Mesurer et construire des angles": 1
            }
          }
        },
        "Comprendre l'effet de quelques transformations sur des grandeurs géométriques": {
          "domaine": "D2",
          "notions": {
            "Agrandissement et réduction": {
              "Utiliser un déplacement, d'un agrandissement ou d'une réduction sur les longueurs, les aires, les volumes et les angles": 3
            }
          }
        }
      }
    },
    "Algorithmique & programmation": {
      "classe": "AP",
      "citation": "Y fé pa la bou avan la pli",
      "attendus": {
        "Écrire, mettre au point et exécuter un programme simple": {
          "domaine": "D1",
          "notions": {
            "Écriture d'un programme": {
              "Écrire, mettre au point (tester, corriger) et exécuter un programme en réponse à un programme donné": 1
            },
            "Programmation en parallèle": {
              "Écrire un programme dans lequel des actions sont déclenchées par des évènements extérieurs": 1,
              "Programmer des scripts se déroulant en parallèle": 1,
              "Déclenchement d'une action par un événement": 1
            },
            "Éléments algorithmiques": {
              "Notion de variable informatique": 1,
              "Utilisation de boucles": 1,
              "Utilisation d'instructions conditionnelles": 1
            }
          }
        }
      }
    }
  };

  ID = 1;

  ICONE_ATTENDU = {
    "Utiliser les nombres pour comparer, calculer et résoudre des problèmes": "D1",
    "Utiliser le calcul littéral": "D1",
    "Comprendre et utiliser les notions de divisibilité et de nombres premiers": "D1",
    "Interpréter, représenter et traiter des données": "D3",
    "Comprendre et utiliser des notions élémentaires de probabilités": "D1",
    "Résoudre des problèmes de proportionnalité": "D2",
    "Comprendre et utiliser la notion de fonction": "D4",
    "Représenter l'espace": "D5",
    "Utiliser les notions de géométrie plane pour démontrer": "D1",
    "Calculer avec des grandeurs mesurables ; Exprimer les résultats dans les unités adaptées": "D1",
    "Écrire, mettre au point et exécuter un programme simple": "D1",
    "Comprendre l'effet de quelques transformations sur des grandeurs géométriques": "D2"
  };

  CardSet = (function() {
    function CardSet(theme1) {
      var a, attendu, attenduV, carte, html, i, id, j, n, niveau, nombre_attendus, nombre_notions, notion, notionV, notionsV, numero_attendu, numero_notion, recto, ref, ref1, ref2, ref3, ref4, savoirfaire, savoirfaires, savoirfairesV, verso;
      this.theme = theme1;
      this.attendus = THEMES[this.theme]['attendus'];
      this.set = [];
      numero_attendu = 0;
      nombre_attendus = Object.keys(this.attendus).length;
      console.log("theme:" + this.theme + " - na:" + nombre_attendus);
      for (attendu in this.attendus) {
        numero_attendu++;
        numero_notion = 0;
        nombre_notions = Object.keys(THEMES[this.theme]['attendus'][attendu]['notions']).length;
        ref = THEMES[this.theme]['attendus'][attendu]['notions'];
        for (notion in ref) {
          savoirfaires = ref[notion];
          id = ID++;
          numero_notion++;
          html = "<div class='face recto " + THEMES[this.theme]['classe'] + "'>          \n  <div id='t" + id + "' class='header " + THEMES[this.theme]['classe'] + "'>" + this.theme + "</div>\n  <div id='s" + id + "'  class='content " + THEMES[this.theme]['classe'] + "'>\n  <div class='attendu " + THEMES[this.theme]['attendus'][attendu]['domaine'] + "'>\n    " + attendu + "\n  </div>\n  <div class='carteID'>" + id + "</div> \n  <div class='citation'>" + THEMES[this.theme]['citation'] + "</div>\n</div>";
          recto = $(html);
          html = "";
          for (n = i = 1, ref1 = nombre_attendus; 1 <= ref1 ? i <= ref1 : i >= ref1; n = 1 <= ref1 ? ++i : --i) {
            if (n === numero_attendu) {
              html += "<img src='./css/icones/checkbox_checked_target.png'>" + n;
            } else {
              html += "<img src='./css/icones/checkbox_unchecked_target.png'>" + n;
            }
          }
          html += "<div class='notion'>" + notion + "</div>";
          for (n = j = 1, ref2 = nombre_notions; 1 <= ref2 ? j <= ref2 : j >= ref2; n = 1 <= ref2 ? ++j : --j) {
            if (n === numero_notion) {
              html += "<img class='img_chkbox' src='./css/icones/checkbox_checked.png'>" + n;
            } else {
              html += "<img class='img_chkbox' src='./css/icones/checkbox_unchecked.png'>" + n;
            }
          }
          recto.find("#s" + id).append(html);
          verso = $("<div class='face verso " + THEMES[this.theme]['classe'] + "'></div>");
          html = "<div class='header " + THEMES[this.theme]['classe'] + "'>";
          if (recto.find("#s" + id + " .attendu").hasClass("D1")) {
            html += "<div class='competence representer'></div>";
            html += "<div class='competence modeliser'></div>";
            html += "<div class='competence communiquer'></div>";
          }
          if (recto.find("#s" + id + " .attendu").hasClass("D2")) {
            html += "<div class='competence chercher'></div>";
            html += "<div class='competence modeliser'></div>";
            html += "<div class='competence raisonner'></div>";
          }
          if (recto.find("#s" + id + " .attendu").hasClass("D3")) {
            html += "<div class='competence raisonner'></div>";
            html += "<div class='competence communiquer'></div>";
          }
          if (recto.find("#s" + id + " .attendu").hasClass("D4")) {
            html += "<div class='competence chercher'></div>";
            html += "<div class='competence modeliser'></div>";
            html += "<div class='competence raisonner'></div>";
            html += "<div class='competence calculer'></div>";
          }
          if (recto.find("#s" + id + " .attendu").hasClass("D5")) {
            html += "<div class='competence representer'></div>";
          }
          html += "</div>";
          verso.append(html);
          verso.append("<ul id='attendus'></ul>");
          a = 0;
          ref3 = THEMES[this.theme]['attendus'];
          for (attenduV in ref3) {
            notionsV = ref3[attenduV];
            a++;
            if (a === numero_attendu) {
              console.log(attenduV);
              verso.find("#attendus").append("<li class='attendu content " + THEMES[this.theme]['classe'] + "'>\n  <div class='target'>" + attenduV + "</div>\n  <ol id='notions'></ol>\n</li>");
              n = 0;
              ref4 = notionsV.notions;
              for (notionV in ref4) {
                savoirfairesV = ref4[notionV];
                n++;
                if (n === numero_notion) {
                  verso.find("#notions").append("<li class='notion'>" + notionV + "\n  <ul id='savoirfaires'></ul>\n</li>");
                  for (savoirfaire in savoirfairesV) {
                    niveau = savoirfairesV[savoirfaire];
                    verso.find("#savoirfaires").append("<li>" + savoirfaire + ": <img class='star' src='img/" + niveau + "star.png'></li>");
                  }
                } else {
                  verso.find("#notions").append("<li class='notion'>" + notionV + "</li>");
                }
              }
            } else {
              verso.find("#attendus").append("<li class='attendu'><div class='target'>" + attenduV + "</div></li>");
            }
          }
          carte = $("<div></div>");
          carte.append("<div id='" + "' class='carte'></div>");
          carte.find(".carte").append(recto).append(verso);
          this.set.push(carte.html());
        }
      }
    }

    return CardSet;

  })();

  $(function() {
    var i, j, len, len1, ref, s, set, theme, themes;
    themes = Object.keys(THEMES);
    for (i = 0, len = themes.length; i < len; i++) {
      theme = themes[i];
      set = new CardSet(theme);
      ref = set.set;
      for (j = 0, len1 = ref.length; j < len1; j++) {
        s = ref[j];
        $(".deck").append(s);
      }
    }
    $(".deck").sortable();
    $(".verso").hide();
    $(".carte").on("click", function() {
      return $(this).find(".recto, .verso").toggle();
    });
    return $("#toggle").on("click", function() {
      return $(".recto, .verso").toggle();
    });
  });

}).call(this);
