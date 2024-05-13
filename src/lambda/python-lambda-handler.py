# Código da função lambda em Python
import json
import boto3

def python_lambda_handler(event, context):
    # Aqui você processa o evento recebido do Node.js
    print("Event received:", event)

    lambda_client = boto3.client('lambda')

    function_name = 'orders'

    response = lambda_client.invoke(
        FunctionName=function_name,
        InvocationType='RequestResponse',  # Pode ser 'Event' se você não estiver esperando uma resposta imediata        
    )
        
    result = json.load(response['Payload'])
    print(result)