// hi jack original tooltip
// ~~idk if this impact performance~~

onUiUpdate(function(){
	gradioApp().querySelectorAll('span, button, select, p').forEach(function(span){
		tooltip = titles[span.textContent];

		if(!tooltip){
		    tooltip = titles[span.value];
		}

		if(!tooltip){
			for (const c of span.classList) {
				if (c in titles) {
					tooltip = titles[c];
					break;
				}
			}
		}

		if(tooltip){
            if (tooltip in localization){
                span.title = localization[tooltip]
            }else{
                span.title = tooltip;
            }
		}
	})

	gradioApp().querySelectorAll('select').forEach(function(select){
	    if (select.onchange != null) return;

	    select.onchange = function(){
            select.title = titles[select.value] || "";
	    }
	})
})
