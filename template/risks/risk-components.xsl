<xsl:stylesheet xmlns="http://www.w3.org/2000/svg"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:adl="http://www.kite9.org/schema/adl"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  xmlns:pp="http://www.kite9.org/schema/post-processor" version="1.0">
  
  <xsl:template name="background-risk-first-diagram-defs">
    <linearGradient id='risk-background' x1='0%' x2='0%' y1='0%' y2='100%'>
      <stop offset='0%' stop-color='#FFF' />
      <stop offset='100%' stop-color='#DDD' />
    </linearGradient>   
  </xsl:template>
  
  <!-- standard stuff that goes inside a risk-box -->
  <xsl:template name="risks-content">
    <xsl:apply-templates select="adl:code" />
    <xsl:call-template name="formats-image">
      <xsl:with-param name="k9-elem">image</xsl:with-param>
      <xsl:with-param name="id"><xsl:value-of select="@id" />@image</xsl:with-param>
    </xsl:call-template>
    <xsl:apply-templates select="adl:title" />
  </xsl:template>
  
  <xsl:template match="adl:title | adl:code">
    <xsl:call-template name="formats-text-fixed" />
  </xsl:template>
 
  <xsl:template name="risks-generic" match="adl:risk">
    <xsl:call-template name="formats-container">
      <xsl:with-param name="k9-ui">drag delete align connect autoconnect vote edit</xsl:with-param>
      <xsl:with-param name="k9-palette">connected risk</xsl:with-param>
      <xsl:with-param name="content">
        <xsl:call-template name="risks-content"/>
      </xsl:with-param>
    </xsl:call-template>
  </xsl:template>

  <xsl:template name="risks-fixed">
    <xsl:param name="code" />
    <xsl:param name="image"/>
    <xsl:param name="dtitle" />
    <xsl:call-template name="formats-container">
      <xsl:with-param name="k9-ui">drag delete align connect autoconnect vote</xsl:with-param>
      <xsl:with-param name="k9-palette">connected risk</xsl:with-param>
      <xsl:with-param name="content">
       <xsl:call-template name="formats-text-fixed">
          <xsl:with-param name="k9-elem">code</xsl:with-param>
          <xsl:with-param name="content"><text><xsl:value-of select="$code" /></text></xsl:with-param>
          <xsl:with-param name="id"></xsl:with-param>
          <xsl:with-param name="class"></xsl:with-param>
          <xsl:with-param name="style"></xsl:with-param>
        </xsl:call-template>
        <xsl:call-template name="formats-image">
          <xsl:with-param name="href" select="$image" />
          <xsl:with-param name="k9-elem">image</xsl:with-param>
          <xsl:with-param name="id"><xsl:value-of select="@id" />@image</xsl:with-param>
          <xsl:with-param name="class"></xsl:with-param>
          <xsl:with-param name="style"></xsl:with-param>
        </xsl:call-template>
        <xsl:call-template name="formats-text-fixed">
          <xsl:with-param name="k9-elem">title</xsl:with-param>
          <xsl:with-param name="id"><xsl:value-of select="@id" />@text</xsl:with-param>
          <xsl:with-param name="class"></xsl:with-param>
          <xsl:with-param name="style"></xsl:with-param>
          <xsl:with-param name="content">
            <xsl:choose>
              <xsl:when test="text()"> 
                <text><xsl:value-of select="text()" /></text>
              </xsl:when>
              <xsl:otherwise>
                <text><xsl:value-of select="$dtitle" /></text>
              </xsl:otherwise>
            </xsl:choose>
          </xsl:with-param> 
        </xsl:call-template>  
      </xsl:with-param>
    </xsl:call-template>
  </xsl:template> 
  
  <xsl:template match="adl:risk[@class='hidden']">
    <xsl:call-template name="risks-fixed">
      <xsl:with-param name="code">?</xsl:with-param>
      <xsl:with-param name="image">/github/kite9-org/kite9/templates/risk-first/redesign/risks/hidden_risk_v2.svg</xsl:with-param>
      <xsl:with-param name="dtitle">Hidden Risk</xsl:with-param>
    </xsl:call-template>
  </xsl:template>
  
  <xsl:template match="adl:risk[@class='invisibility']">
    <xsl:call-template name="risks-fixed">
      <xsl:with-param name="code">I</xsl:with-param>
      <xsl:with-param name="image">/github/kite9-org/kite9/templates/risk-first/redesign/risks/invisibility_risk_v2.svg</xsl:with-param>
      <xsl:with-param name="dtitle">Invisibility Risk</xsl:with-param>
    </xsl:call-template>
  </xsl:template>
  
  <xsl:template match="adl:risk[@class='feature']">
    <xsl:call-template name="risks-fixed">
      <xsl:with-param name="code">F</xsl:with-param>
  
      <xsl:with-param name="image">/github/kite9-org/kite9/templates/risk-first/redesign/risks/feature_risk_v2.svg</xsl:with-param>
      <xsl:with-param name="dtitle">Feature Risk</xsl:with-param>
    </xsl:call-template>
  </xsl:template>
  
  <xsl:template match="adl:risk[@class='market']">
    <xsl:call-template name="risks-fixed">
      <xsl:with-param name="code">F-Ma</xsl:with-param>
      <xsl:with-param name="image">/github/kite9-org/kite9/templates/risk-first/redesign/risks/feature_market_risk_v2.svg</xsl:with-param>
      <xsl:with-param name="dtitle">Market Risk</xsl:with-param>
    </xsl:call-template>
  </xsl:template>
  
  <xsl:template match="adl:risk[@class='communication']">
    <xsl:call-template name="risks-fixed">
      <xsl:with-param name="code">Co</xsl:with-param>
      <xsl:with-param name="image">/github/kite9-org/kite9/templates/risk-first/redesign/risks/communication_risk_v2.svg</xsl:with-param>
      <xsl:with-param name="dtitle">Communication Risk</xsl:with-param>
    </xsl:call-template>
  </xsl:template>
  
  <xsl:template match="adl:risk[@class='coordination']">
    <xsl:call-template name="risks-fixed">
      <xsl:with-param name="code">Cr</xsl:with-param>
      <xsl:with-param name="image">/github/kite9-org/kite9/templates/risk-first/redesign/risks/coordination_risk_v2.svg</xsl:with-param>
      <xsl:with-param name="dtitle">Coordination Risk</xsl:with-param>
    </xsl:call-template>
  </xsl:template>
  
  <xsl:template match="adl:risk[@class='complexity']">
    <xsl:call-template name="risks-fixed">
      <xsl:with-param name="code">Cx</xsl:with-param>
      <xsl:with-param name="image">/github/kite9-org/kite9/templates/risk-first/redesign/risks/complexity_risk_v2.svg</xsl:with-param>
      <xsl:with-param name="dtitle">Complexity Risk</xsl:with-param>
    </xsl:call-template>
  </xsl:template>
  
  <xsl:template match="adl:risk[@class='boundary']">
    <xsl:call-template name="risks-fixed">
      <xsl:with-param name="code">B</xsl:with-param>
      <xsl:with-param name="image">/github/kite9-org/kite9/templates/risk-first/redesign/risks/boundary_risk_v2.svg</xsl:with-param>
      <xsl:with-param name="dtitle">Boundary Risk</xsl:with-param>
    </xsl:call-template>
  </xsl:template>
  
  <xsl:template match="adl:risk[@class='agency']">
    <xsl:call-template name="risks-fixed">
      <xsl:with-param name="code">A</xsl:with-param>
      <xsl:with-param name="image">/github/kite9-org/kite9/templates/risk-first/redesign/risks/agency_risk_v2.svg</xsl:with-param>
      <xsl:with-param name="dtitle">Agency Risk</xsl:with-param>
    </xsl:call-template>
  </xsl:template>
  
  <xsl:template match="adl:risk[@class='channel']">
    <xsl:call-template name="risks-fixed">
      <xsl:with-param name="code">Ch</xsl:with-param>
      <xsl:with-param name="image">/github/kite9-org/kite9/templates/risk-first/redesign/risks/channel_risk_v2.svg</xsl:with-param>
      <xsl:with-param name="dtitle">Channel Risk</xsl:with-param>
    </xsl:call-template>
  </xsl:template>
  
  <xsl:template match="adl:risk[@class='protocol']">
    <xsl:call-template name="risks-fixed">
      <xsl:with-param name="code">Pr</xsl:with-param>
      <xsl:with-param name="image">/github/kite9-org/kite9/templates/risk-first/redesign/risks/protocol_risk_v2.svg</xsl:with-param>
      <xsl:with-param name="dtitle">Protocol Risk</xsl:with-param>
    </xsl:call-template>
  </xsl:template>
  
  <xsl:template match="adl:risk[@class='trust']">
    <xsl:call-template name="risks-fixed">
      <xsl:with-param name="code">T</xsl:with-param>
      <xsl:with-param name="image">/github/kite9-org/kite9/templates/risk-first/redesign/risks/trust_belief_risk_v2.svg</xsl:with-param>
      <xsl:with-param name="dtitle">Trust &amp; Belief 
      Risk</xsl:with-param>
    </xsl:call-template>
  </xsl:template>
  
  <xsl:template match="adl:risk[@class='learning-curve']">
    <xsl:call-template name="risks-fixed">
      <xsl:with-param name="code">Lc</xsl:with-param>
      <xsl:with-param name="image">/github/kite9-org/kite9/templates/risk-first/redesign/risks/learning_curve_risk_v2.svg</xsl:with-param>
      <xsl:with-param name="dtitle">Learning Curve Risk</xsl:with-param>
    </xsl:call-template>
  </xsl:template>
  
  <xsl:template match="adl:risk[@class='message']">
    <xsl:call-template name="risks-fixed">
      <xsl:with-param name="code">M</xsl:with-param>
      <xsl:with-param name="image">/github/kite9-org/kite9/templates/risk-first/redesign/risks/message_risk_v2.svg</xsl:with-param>
      <xsl:with-param name="dtitle">Message Risk</xsl:with-param>
    </xsl:call-template>
  </xsl:template>
  
  <xsl:template match="adl:risk[@class='internal-model']">
    <xsl:call-template name="risks-fixed">
      <xsl:with-param name="code">IM</xsl:with-param>
      <xsl:with-param name="image">/github/kite9-org/kite9/templates/risk-first/redesign/risks/internal_model_risk_v2.svg</xsl:with-param>
      <xsl:with-param name="dtitle">Internal Model Risk</xsl:with-param>
    </xsl:call-template>
  </xsl:template>
  
  <xsl:template match="adl:risk[@class='feature-fit']">
    <xsl:call-template name="risks-fixed">
      <xsl:with-param name="code">F-F</xsl:with-param>
      <xsl:with-param name="image">/github/kite9-org/kite9/templates/risk-first/redesign/risks/feature_fit_risk_v2.svg</xsl:with-param>
      <xsl:with-param name="dtitle">Feature Fit Risk</xsl:with-param>
    </xsl:call-template>
  </xsl:template>
  
  <xsl:template match="adl:risk[@class='implementation']">
    <xsl:call-template name="risks-fixed">
      <xsl:with-param name="code">F-Im</xsl:with-param>
      <xsl:with-param name="image">/github/kite9-org/kite9/templates/risk-first/redesign/risks/feature_implementation_risk_v2.svg</xsl:with-param>
      <xsl:with-param name="dtitle">Implementation Risk</xsl:with-param>
    </xsl:call-template>
  </xsl:template>
  
  <xsl:template match="adl:risk[@class='feature-drift']">
    <xsl:call-template name="risks-fixed">
      <xsl:with-param name="code">F-D</xsl:with-param>
      <xsl:with-param name="image">/github/kite9-org/kite9/templates/risk-first/redesign/risks/feature_drift_risk_v2.svg</xsl:with-param>
      <xsl:with-param name="dtitle">Feature Drift Risk</xsl:with-param>
    </xsl:call-template>
  </xsl:template>
  
  <xsl:template match="adl:risk[@class='feature-access']">
    <xsl:call-template name="risks-fixed">
      <xsl:with-param name="code">F-A</xsl:with-param>
      <xsl:with-param name="image">/github/kite9-org/kite9/templates/risk-first/redesign/risks/feature_access_risk_v2.svg</xsl:with-param>
      <xsl:with-param name="dtitle">Feature Access Risk</xsl:with-param>
    </xsl:call-template>
  </xsl:template>
  
  <xsl:template match="adl:risk[@class='regression']">
    <xsl:call-template name="risks-fixed">
      <xsl:with-param name="code">F-R</xsl:with-param>
      <xsl:with-param name="image">/github/kite9-org/kite9/templates/risk-first/redesign/risks/feature_regression_risk_v2.svg</xsl:with-param>
      <xsl:with-param name="dtitle">Regression Risk</xsl:with-param>
    </xsl:call-template>
  </xsl:template>
  
  <xsl:template match="adl:risk[@class='conceptual-integrity']">
    <xsl:call-template name="risks-fixed">
      <xsl:with-param name="code">F-Ci</xsl:with-param>
      <xsl:with-param name="image">/github/kite9-org/kite9/templates/risk-first/redesign/risks/conceptual_integrity_risk_v2.svg</xsl:with-param>
      <xsl:with-param name="dtitle">Conceptual Integrity Risk</xsl:with-param>
    </xsl:call-template>
  </xsl:template>
  
  <xsl:template match="adl:risk[@class='codebase']">
    <xsl:call-template name="risks-fixed">
      <xsl:with-param name="code">Cb</xsl:with-param>
      <xsl:with-param name="image">/github/kite9-org/kite9/templates/risk-first/redesign/risks/codebase_risk_v2.svg</xsl:with-param>
      <xsl:with-param name="dtitle">Codebase Risk</xsl:with-param>
    </xsl:call-template>
  </xsl:template>
  
  <xsl:template match="adl:risk[@class='dependency']">
    <xsl:call-template name="risks-fixed">
      <xsl:with-param name="code">D</xsl:with-param>
      <xsl:with-param name="image">/github/kite9-org/kite9/templates/risk-first/redesign/risks/dependency_risk_v2.svg</xsl:with-param>
      <xsl:with-param name="dtitle">Dependency Risk</xsl:with-param>
    </xsl:call-template>
  </xsl:template>
  
  <xsl:template match="adl:risk[@class='dead-end']">
    <xsl:call-template name="risks-fixed">
      <xsl:with-param name="code">De</xsl:with-param>
      <xsl:with-param name="image">/github/kite9-org/kite9/templates/risk-first/redesign/risks/dead_end_risk_v2.svg</xsl:with-param>
      <xsl:with-param name="dtitle">Dead-End Risk</xsl:with-param>
    </xsl:call-template>
  </xsl:template>
  
  <xsl:template match="adl:risk[@class='reliability']">
    <xsl:call-template name="risks-fixed">
      <xsl:with-param name="code">D-R</xsl:with-param>
      <xsl:with-param name="image">/github/kite9-org/kite9/templates/risk-first/redesign/risks/dependency_reliability_risk_v2.svg</xsl:with-param>
      <xsl:with-param name="dtitle">Reliability Risk</xsl:with-param>
    </xsl:call-template>
  </xsl:template>
  
  <xsl:template match="adl:risk[@class='scarcity']">
    <xsl:call-template name="risks-fixed">
      <xsl:with-param name="code">D-Sc</xsl:with-param>
      <xsl:with-param name="image">/github/kite9-org/kite9/templates/risk-first/redesign/risks/dependency_scarcity_risk_v2.svg</xsl:with-param>
      <xsl:with-param name="dtitle">Scarcity Risk</xsl:with-param>
    </xsl:call-template>
  </xsl:template>
  
  <xsl:template match="adl:risk[@class='operational']">
    <xsl:call-template name="risks-fixed">
      <xsl:with-param name="code">Op</xsl:with-param>
      <xsl:with-param name="image">/github/kite9-org/kite9/templates/risk-first/redesign/risks/operational_risk_v2.svg</xsl:with-param>
      <xsl:with-param name="dtitle">Operational Risk</xsl:with-param>
    </xsl:call-template>
  </xsl:template>
  
  <xsl:template match="adl:risk[@class='schedule']">
    <xsl:call-template name="risks-fixed">
      <xsl:with-param name="code">D-Sh</xsl:with-param>
      <xsl:with-param name="image">/github/kite9-org/kite9/templates/risk-first/redesign/risks/dependency_schedule_risk_v2.svg</xsl:with-param>
      <xsl:with-param name="dtitle">Schedule Risk</xsl:with-param>
    </xsl:call-template>
  </xsl:template>
  
  <xsl:template match="adl:risk[@class='opportunity']">
    <xsl:call-template name="risks-fixed">
      <xsl:with-param name="code">D-Opp</xsl:with-param>
      <xsl:with-param name="image">/github/kite9-org/kite9/templates/risk-first/redesign/risks/dependency_opportunity_risk_v2.svg</xsl:with-param>
      <xsl:with-param name="dtitle">Opportunity Risk</xsl:with-param>
    </xsl:call-template>
  </xsl:template>
  
  <xsl:template match="adl:risk[@class='deadline']">
    <xsl:call-template name="risks-fixed">
      <xsl:with-param name="code">D-Dl</xsl:with-param>
      <xsl:with-param name="image">/github/kite9-org/kite9/templates/risk-first/redesign/risks/dependency_deadline_risk_v2.svg</xsl:with-param>
      <xsl:with-param name="dtitle">Deadline Risk</xsl:with-param>
    </xsl:call-template>
  </xsl:template>
  
  <xsl:template match="adl:risk[@class='funding']">
    <xsl:call-template name="risks-fixed">
      <xsl:with-param name="code">D-Fu</xsl:with-param>
      <xsl:with-param name="image">/github/kite9-org/kite9/templates/risk-first/redesign/risks/dependency_funding_risk_v2.svg</xsl:with-param>
      <xsl:with-param name="dtitle">Funding Risk</xsl:with-param>
    </xsl:call-template>
  </xsl:template>
  
  <xsl:template match="adl:risk[@class='red-queen']">
    <xsl:call-template name="risks-fixed">
      <xsl:with-param name="code">D-Rq</xsl:with-param>
      <xsl:with-param name="image">/github/kite9-org/kite9/templates/risk-first/redesign/risks/dependency_red_queen_risk_v2.svg</xsl:with-param>
      <xsl:with-param name="dtitle">Red Queen Risk</xsl:with-param>
    </xsl:call-template>
  </xsl:template>
  
  <xsl:template match="adl:risk[@class='staff']">
    <xsl:call-template name="risks-fixed">
      <xsl:with-param name="code">D-St</xsl:with-param>
      <xsl:with-param name="image">/github/kite9-org/kite9/templates/risk-first/redesign/risks/staff_risk_v2.svg</xsl:with-param>
      <xsl:with-param name="dtitle">Staff Risk</xsl:with-param>
    </xsl:call-template>
  </xsl:template>
  
  <xsl:template match="adl:risk[@class='process']">
    <xsl:call-template name="risks-fixed">
      <xsl:with-param name="code">D-Pr</xsl:with-param>
      <xsl:with-param name="image">/github/kite9-org/kite9/templates/risk-first/redesign/risks/dependency_process_risk_v2.svg</xsl:with-param>
      <xsl:with-param name="dtitle">Process Risk</xsl:with-param>
    </xsl:call-template>
  </xsl:template>
  
  <xsl:template match="adl:risk[@class='map-and-territory']">
    <xsl:call-template name="risks-fixed">
      <xsl:with-param name="code">MT</xsl:with-param>
      <xsl:with-param name="image">/github/kite9-org/kite9/templates/risk-first/redesign/risks/map_and_territory_risk_v2.svg</xsl:with-param>
      <xsl:with-param name="dtitle">Map And Territory Risk</xsl:with-param>
    </xsl:call-template>
  </xsl:template>
  
  <xsl:template match="adl:risk[@class='software-dependency']">
    <xsl:call-template name="risks-fixed">
      <xsl:with-param name="code">D-Sw</xsl:with-param>
      <xsl:with-param name="image">/github/kite9-org/kite9/templates/risk-first/redesign/risks/dependency_software_risk_v2.svg</xsl:with-param>
      <xsl:with-param name="dtitle">Software Dependency Risk</xsl:with-param>
    </xsl:call-template>
  </xsl:template>
  
  <xsl:template match="adl:risk[@class='security']">
    <xsl:call-template name="risks-fixed">
      <xsl:with-param name="code">S</xsl:with-param>
      <xsl:with-param name="image">/github/kite9-org/kite9/templates/risk-first/redesign/risks/security_risk_v2.svg</xsl:with-param>
      <xsl:with-param name="dtitle">Security Risk</xsl:with-param>
    </xsl:call-template>
  </xsl:template>
  
  <xsl:template match="adl:risk[@class='attendant']">
    <xsl:call-template name="risks-fixed">
      <xsl:with-param name="code">Risk</xsl:with-param>
      <xsl:with-param name="image">/github/kite9-org/kite9/templates/risk-first/redesign/risks/attendant_risk_v2.svg</xsl:with-param>
      <xsl:with-param name="dtitle">Attendant Risk</xsl:with-param>
    </xsl:call-template>
  </xsl:template>
  
  <xsl:template match="adl:hidden">
    <xsl:call-template name="formats-container">
      <xsl:with-param name="k9-contains">risk</xsl:with-param>
      <xsl:with-param name="decoration">
        <xsl:apply-templates mode="container-decoration" select="." />
          <g pp:transform="scale([[$width div 230]]) translate(140,-20)">
            <image xlink:href="/github/kite9-org/kite9/templates/risk-first/redesign/decals/hidden_risk_v2.svg" width="100px" height="100px"/>
          </g>
      </xsl:with-param>
    </xsl:call-template>
  </xsl:template>

  <xsl:template match="adl:mitigated">
    <xsl:call-template name="formats-container">
      <xsl:with-param name="k9-contains">risk</xsl:with-param>
      <xsl:with-param name="k9-texture">none</xsl:with-param>
      <xsl:with-param name="decoration">
        <line x1="0" y1="0" pp:y1="$height" x2="0" pp:x2="$width" y2="0" stroke="black" stroke-width="10pt" stroke-opacity="0.2"/>
      </xsl:with-param>
    </xsl:call-template>
  </xsl:template>

 
  <xsl:template name="risks-risk-first-diagram-element-css">
    <adl:css>@import url('/github/kite9-org/kite9/templates/risk-first/risks/risk-elements.css');</adl:css>
  </xsl:template>
  

</xsl:stylesheet>