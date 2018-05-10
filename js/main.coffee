THEMES = {}
ID=1

#console.log JSON.stringify THEMES

class CardSet
  constructor: (@theme, @cycle) ->
    @attendus = THEMES[@theme]['attendus']
    @set = []
    
    numero_attendu = 0
    nombre_attendus = Object.keys(@attendus).length
    $carte = $($("#carteObject").html())
    $recto = $carte.find(".recto")
    $verso = $carte.find(".verso")


    for attendu of @attendus
      numero_attendu++
      numero_notion = 0
      nombre_notions = Object.keys(THEMES[@theme]['attendus'][attendu]['notions']).length

      for notion, savoirfaires of THEMES[@theme]['attendus'][attendu]['notions']
        id = ID++
        numero_notion++
        domainClass = THEMES[@theme]['attendus'][attendu]['domaine']
        
        #recto de la carte
        $carte.find( ".bleeding.recto" ).attr "data-id", "#{id}r"
        $recto.attr "data-id", "#{id}r"
        $recto.attr "data-theme", THEMES[@theme]['classe']
        $recto.find(".carteID").html id
        $recto.find(".cycle").html @cycle
        $recto.find(".theme").html @theme
        $recto.find(".logo").attr "data-theme", THEMES[@theme]['classe']
        $recto.find(".attendu-title").html attendu
        $recto.find(".attendu-title").attr "data-domaine", domainClass
        $recto.find(".citation").html THEMES[@theme]['citation']
        $recto.find(".notion").html notion

        # Mise en place des cibles par attendu de fin de cycle
        html  = ""
        for n in [1..nombre_attendus]
          if n is numero_attendu
            html += "<div class='tg-icon chkbox-checked'></div>#{n}"
          else
            html += "<div class='tg-icon chkbox-unchecked'></div>#{n}"
        $recto.find(".attendus-targets").html html 
        
        # Mise en place des checkbox par notion d'attendu
        html = ""
        for n in [1..nombre_notions]
          if n is numero_notion
            html += "<img class='no-icon chkbox-checked'>#{n}"
          else
            html += "<img class='no-icon chkbox-unchecked'>#{n}"
        $recto.find(".notions-targets").html html
        
        #verso de la carte
        $carte.find( ".bleeding.verso" ).attr "data-id", "#{id}v"
        $verso.attr "data-theme", THEMES[@theme]['classe']
        $verso.attr "data-id", "#{id}v"
        $verso.find(".carteID").html id
        $verso.find(".cycle").html @cycle
        $verso.find(".theme").html "<span>#{@theme}</span>"
        $verso.find(".logo").attr "data-theme", THEMES[@theme]['classe']

        html = ""
        switch $recto.find( ".attendu-title" ).attr "data-domaine"
          when "D1"
            html += "<div class='competence representer'></div>"
            html += "<div class='competence modeliser'></div>"
            html += "<div class='competence communiquer'></div>"
          when "D2"
            html += "<div class='competence chercher'></div>"
            html += "<div class='competence modeliser'></div>"
            html += "<div class='competence raisonner'></div>"
          when "D3"
            html += "<div class='competence raisonner'></div>"
            html += "<div class='competence communiquer'></div>" 
          when "D4"
            html += "<div class='competence chercher'></div>" 
            html += "<div class='competence modeliser'></div>"
            html += "<div class='competence raisonner'></div>" 
            html += "<div class='competence calculer'></div>" 
          when "D5"
            html += "<div class='competence representer'></div>" 

        $verso.find(".competences").empty().html html
        
        a=0
        $verso.find( ".attendus-content" ).empty()
        for attenduV, notionsV of THEMES[@theme]['attendus']
          a++
          if a is numero_attendu
            #console.log attenduV
            $verso.find( ".attendus-content" ).append """
            <li class='attendu content #{THEMES[@theme]['classe']}'>
              <div class="attenduV">#{attenduV}</div>
              <ol class='notions'></ol>
            </li>
            """
            n = 0
            for notionV, savoirfairesV of notionsV.notions
              n++      
              if (n is numero_notion)
                $verso.find(".notions").append """
                <li class='notion'>#{notionV}
                  <ul class='savoirfaires'></ul>
                </li>"""
                for savoirfaire, niveau of savoirfairesV
                  $verso.find(".savoirfaires").append """
                    <li>#{savoirfaire}: 
                      <img class='star' src='img/#{niveau}star.png'>
                    </li>"""
              else $verso.find(".notions").append( "<li class='notion'>#{notionV}</li>" )
          else $verso.find( ".attendus-content" ).append """
            <li class='attendu'>#{attenduV}
            </li>"""

        
        
        carte = $("<div></div>")
        carte.append $carte
        @set.push carte.html()


$ ->
  zip = new JSZip()
  batkart = (file, cycle) ->
    $.getJSON file, ( data ) -> 
      THEMES = data
      themes = Object.keys(THEMES)
      $( ".deck" ).empty()
      for theme in themes
        set = new CardSet theme, cycle
        for s in set.set
          $( ".deck" ).append s
      
      $(".deck").sortable()
      #$( ".verso" ).hide()

  generateCanvas = (carte, id, zip, deferred) ->
    html2canvas( carte ).then (canvas) -> 
      imgUrl = canvas.toDataURL()
      zip.file("carte-#{id}.png", imgUrl.split('base64,')[1],{base64: true})
      deferred.resolve()
      $("#info").html "Carte #{id} traité !"
  
  $( "#toPNG" ).on "click", ->
    $(this).prop("disabled",true)
    deferreds = [];
    $selected_bleedings = $(".bleeding:visible")
    $selected_bleedings.each ->
      id = $(this).attr("data-id")
      $("#info").html "Envoi de la carte #{id}"
      deferred = $.Deferred()
      deferreds.push(deferred.promise())
      generateCanvas($(this)[0], id, zip, deferred)
    $("#info").html "Travail en cours..."
      
    $.when.apply($, deferreds).then () ->
      $( "#toPNG" ).prop("disabled",false)
      zip.generateAsync({ type: "blob" }).then (content) ->
        link = document.createElement('a')
        blobLink = window.URL.createObjectURL(content)
        link.addEventListener 'click', (ev) ->
          link.href = blobLink;
          link.download = 'cartes.zip'
        , false
        link.click()
  
  $( "#cycle3" ).on "click", -> 
    ID = 1
    batkart "cycle3.json", "Cycle 3"
  
  $( "#cycle4" ).on "click", -> 
    ID = 1
    batkart "cycle4.json", "Cycle 4" 
    
    
    
    
    
    
