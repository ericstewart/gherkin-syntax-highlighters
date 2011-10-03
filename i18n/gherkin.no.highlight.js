hljs.LANGUAGES.gherkin_no = function() {
  return {
    defaultMode: {
      contains: [
        {
          className: 'keyword',
          begin: '^\\s*(Men\u0020|Og\u0020|S\u00e5\u0020|N\u00e5r\u0020|Gitt\u0020|\\* |Eksempler|Abstrakt\u0020Scenario|Scenariomal|Scenario|Bakgrunn|Egenskap)',
          relevance: 0
        },
        {
          className: 'string',
          begin: '\\|',
          relevance: 0
        },
        hljs.HASH_COMMENT_MODE,
        {
          className: 'string',
          begin: '"""', end: '"""',
          relevance: 10
        },
        hljs.APOS_STRING_MODE, 
        hljs.QUOTE_STRING_MODE,
        hljs.C_NUMBER_MODE,
        {
          className: 'annotation', begin: '@[^@\r\n\t ]+'
        }
      ]
    }
  };
}();