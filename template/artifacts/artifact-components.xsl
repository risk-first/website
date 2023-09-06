<xsl:stylesheet xmlns="http://www.w3.org/2000/svg"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:adl="http://www.kite9.org/schema/adl"
  xmlns:pp="http://www.kite9.org/schema/post-processor" version="1.0">

  <xsl:template name="arrow" match="adl:arrow | adl:block">
    <xsl:call-template name="formats-text-shape-inline">
      <xsl:with-param name="k9-ui">drag delete align connect autoconnect edit</xsl:with-param>
    </xsl:call-template>
  </xsl:template>
  
   <xsl:template match="adl:description | adl:long-description ">
     <xsl:call-template name="formats-text-fixed" />
  </xsl:template>
  
  <xsl:template name="artifact" match="adl:artifact |  
    adl:document |
    adl:users |
    adl:computer | 
    adl:interface |
    adl:component |
    adl:channel-artifact |
    adl:internal-model-artifact |
    adl:protocol-artifact |
    adl:agent-artifact |
    adl:image-artifact">
    <xsl:call-template name="formats-text-image-portrait">
      <xsl:with-param name="k9-ui">drag delete align connect autoconnect edit</xsl:with-param>
      <xsl:with-param name="k9-texture">artifact</xsl:with-param>
      <xsl:with-param name="href">
      	<xsl:choose>
          <xsl:when test="name() = 'agent-artifact'">/github/kite9-org/kite9/templates/risk-first/redesign/risks/agency_risk_v2.svg</xsl:when>
          <xsl:when test="name() = 'document'">/github/kite9-org/kite9/templates/risk-first/redesign/artifacts/document_v2.svg</xsl:when>
          <xsl:when test="name() = 'users'">/github/kite9-org/kite9/templates/risk-first/redesign/artifacts/users_v2.svg</xsl:when>
          <xsl:when test="name() = 'interface'">/github/kite9-org/kite9/templates/risk-first/redesign/artifacts/interface_v2.svg</xsl:when>
          <xsl:when test="name() = 'protocol-artifact'">/github/kite9-org/kite9/templates/risk-first/redesign/risks/protocol_risk_v2.svg</xsl:when>
          <xsl:when test="name() = 'internal-model-artifact'">/github/kite9-org/kite9/templates/risk-first/redesign/risks/internal_model_risk.svg</xsl:when>
          <xsl:when test="name() = 'channel-artifact'">/github/kite9-org/kite9/templates/risk-first/redesign/risks/channel_risk_v2.svg</xsl:when>
          <xsl:when test="name() = 'component'">/github/kite9-org/kite9/templates/risk-first/redesign/artifacts/component_v2.svg</xsl:when>
          <xsl:otherwise><xsl:value-of select="@imgsrc"></xsl:value-of></xsl:otherwise>
        </xsl:choose>
      </xsl:with-param> 
    </xsl:call-template>  
  </xsl:template>
    
  <xsl:template name="generic-artifact" match="adl:generic-artifact">
    <xsl:call-template name="formats-text-image-portrait">
      <xsl:with-param name="k9-ui">drag delete align connect autoconnect edit</xsl:with-param>
      <xsl:with-param name="texture-text">artifact</xsl:with-param>
      <xsl:with-param name="texture-back">none</xsl:with-param>
    </xsl:call-template>  
  </xsl:template>  
  
  <xsl:template name="artifacts-risk-first-diagram-element-css">
    <adl:css>@import url('/github/kite9-org/kite9/templates/risk-first/artifacts/artifact-elements.css');</adl:css>
  </xsl:template>
  
</xsl:stylesheet>